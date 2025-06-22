import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  private supabaseUrl = 'https://fxdntkfopkjktppkdvyp.supabase.co';
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4ZG50a2ZvcGtqa3RwcGtkdnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNjA5MTgsImV4cCI6MjA2NTkzNjkxOH0.ZUSeD89nNwYNihaWxBoMgj_KC8wcBAPWJjTP8mvuaM8';
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  async crearPedido(pedido: any): Promise<any> {
    const { data, error } = await this.supabase
      .from('pedidos')
      .insert([pedido]);

    if (error) {
      console.error('Error al crear el pedido:', error);
      throw error;
    }

    console.log('Pedido creado con éxito:', data);
    return data;
  }
}
