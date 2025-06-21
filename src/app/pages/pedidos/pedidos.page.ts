import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Pedidos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>Página de pedidos</h2>
      <p>Aquí podrás revisar tus pedidos y continuar con el proceso.</p>
    </ion-content>
  `
})
export class PedidosPage {}
