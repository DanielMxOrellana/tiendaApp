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

  // Datos del cliente
  nombre = '';
  cedula = '';
  telefono = '';
  correo = '';
  direccion = '';
  tipoEmpaque = '';

  toastMessage = '';
  showToast = false;

  constructor(private router: Router) {
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

  quitarProducto(index: number) {
    this.carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.mostrarToast('Producto eliminado del carrito');
  }

  confirmarPedido() {
    if (!this.nombre || !this.cedula || !this.telefono || !this.correo || !this.direccion || !this.tipoEmpaque) {
      this.mostrarToast('Por favor, complete todos los datos y seleccione un tipo de empaque');
      return;
    }
    if (this.carrito.length === 0) {
      this.mostrarToast('El carrito está vacío');
      return;
    }

    // Aquí podrías enviar el pedido a un servidor o guardarlo donde necesites

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
  }

  cancelarPedido() {
    this.router.navigate(['/compras']);
  }

  mostrarToast(mensaje: string) {
    this.toastMessage = mensaje;
    this.showToast = true;
  }
}
