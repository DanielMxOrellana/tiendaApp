import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule], // <-- Importa los módulos aquí
})
export class PedidosPage implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit() {
    this.pedidosService.obtenerPedidos().subscribe(data => {
      this.pedidos = data as any[];
    });
  }
}