import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonToast,
  IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { trashOutline } from 'ionicons/icons';

interface Dulce {
  nombre: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonToast,
    IonIcon
  ],
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss']
})
export class PedidosPage {
  trashOutline = trashOutline;

  carrito: Dulce[] = [];
  nombre = '';
  cedula = '';
  telefono = '';
  correo = '';
  direccion = '';
  tipoEmpaque = '';
  toastMessage = '';
  showToast = false;

  constructor(private router: Router, private pedidosService: PedidosService) {
    this.cargarCarrito();
  }

  get total(): number {
    return this.carrito.reduce((sum, dulce) => sum + dulce.precio, 0);
  }

  cargarCarrito() {
    const data = localStorage.getItem('carrito');
    if (data) {
      this.carrito = JSON.parse(data);
    }
  }

  mostrarToast(mensaje: string) {
    this.toastMessage = mensaje;
    this.showToast = true;
  }

  async confirmarPedido() {
    // Validación números en cédula y teléfono
    const soloNumeros = /^[0-9]+$/;

    if (!soloNumeros.test(this.cedula) || this.cedula.length < 6) {
      this.mostrarToast('La cédula debe contener solo números y al menos 6 dígitos.');
      return;
    }

    if (!soloNumeros.test(this.telefono) || this.telefono.length < 7) {
      this.mostrarToast('El teléfono debe contener solo números y al menos 7 dígitos.');
      return;
    }

    if (!this.nombre || !this.cedula || !this.telefono || !this.correo || !this.direccion || !this.tipoEmpaque) {
      this.mostrarToast('Por favor, complete todos los datos y seleccione un tipo de empaque');
      return;
    }
    if (this.carrito.length === 0) {
      this.mostrarToast('El carrito está vacío');
      return;
    }

    const pedido = {
      cliente: {
        nombre: this.nombre,
        cedula: this.cedula,
        telefono: this.telefono,
        correo: this.correo,
        direccion: this.direccion,
      },
      tipoEmpaque: this.tipoEmpaque,
      productos: this.carrito,
      total: this.total,
      fecha: new Date().toISOString()
    };

    try {
      await this.pedidosService.crearPedido(pedido);
      localStorage.removeItem('carrito');
      this.carrito = [];
      alert('¡Pedido confirmado!\nGracias por su compra, ' + this.nombre);

      // Limpiar formulario
      this.nombre = '';
      this.cedula = '';
      this.telefono = '';
      this.correo = '';
      this.direccion = '';
      this.tipoEmpaque = '';

      this.router.navigate(['/compras']);
    } catch (error) {
      this.mostrarToast('Hubo un error al enviar el pedido. Intente nuevamente.');
    }
  }

  quitarProducto(index: number) {
    this.carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.mostrarToast('Producto eliminado del carrito');
  }

  cancelarPedido() {
    this.router.navigate(['/compras']);
  }
}
