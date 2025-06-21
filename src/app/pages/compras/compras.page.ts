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
  IonSearchbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

interface Dulce {
  nombre: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-compras',
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
    IonSearchbar
  ],
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss']
})
export class ComprasPage {
  dulces: Dulce[] = [
    { nombre: 'Enrollados', precio: 0.10, imagen: 'assets/img/enrollados.png' },
    { nombre: 'Quesitos de manjar', precio: 0.05, imagen: 'assets/img/quesitos.png' },
    { nombre: 'Quesadilla', precio: 0.15, imagen: 'assets/img/quesadilla.png' },
    { nombre: 'Bocadillos', precio: 0.15, imagen: 'assets/img/bocadillos.png' },
    { nombre: 'Frutas de Manjar', precio: 0.15, imagen: 'assets/img/frutas.png' },
    { nombre: 'Cachitos de Manjar', precio: 0.15, imagen: 'assets/img/cachitos.png' },
    { nombre: 'Aplanchados', precio: 0.15, imagen: 'assets/img/aplanchados.png' },
    { nombre: 'Turrones', precio: 0.15, imagen: 'assets/img/turrones.png' },
    { nombre: 'Alfajores Grandes', precio: 0.15, imagen: 'assets/img/alfajores-grandes.png' },
    { nombre: 'Alfajores Pequeños', precio: 0.15, imagen: 'assets/img/alfajores-pequenos.png' },
    { nombre: 'Alfajores Pequeños con Chocolate', precio: 0.15, imagen: 'assets/img/alfajores-chocolate.png' },
    { nombre: 'Huevitos de Mani', precio: 0.15, imagen: 'assets/img/huevitos.png' }
  ];

  carrito: Dulce[] = [];
  busqueda: string = '';

  constructor(private router: Router) {
    this.cargarCarrito();
  }

  agregarAlCarrito(dulce: Dulce) {
    this.carrito.push(dulce);
    this.guardarCarrito();
  }

  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
    this.guardarCarrito();
  }

  get total(): number {
    return this.carrito.reduce((sum, dulce) => sum + dulce.precio, 0);
  }

  guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  private cargarCarrito() {
    const data = localStorage.getItem('carrito');
    if (data) {
      this.carrito = JSON.parse(data);
    }
  }

  get dulcesFiltrados(): Dulce[] {
    if (!this.busqueda.trim()) return this.dulces;
    const texto = this.busqueda.toLowerCase();
    return this.dulces.filter(d => d.nombre.toLowerCase().includes(texto));
  }

  irAPedidos() {
    if (this.carrito.length > 0) {
      this.router.navigate(['/pedidos']);
    }
  }
}
