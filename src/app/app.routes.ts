import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'pedidos',
    loadComponent: () => import('./pages/pedidos/pedidos.page').then(m => m.PedidosPage)
  },
  {
    path: 'inventario',
    loadComponent: () => import('./pages/inventario/inventario.page').then(m => m.InventarioPage)
  },
  {
    path: 'compras',
    loadComponent: () => import('./pages/compras/compras.page').then(m => m.ComprasPage)
  }
];
