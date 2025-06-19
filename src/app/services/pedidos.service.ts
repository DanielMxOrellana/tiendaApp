import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = 'https://gslxhtrjhqkfuglqujst.supabase.co'; // URL del backend

  constructor(private http: HttpClient) {}

  obtenerPedidos() {
    return this.http.get(this.apiUrl);
  }

  crearPedido(pedido: any) {
    return this.http.post(this.apiUrl, pedido);
  }
}
