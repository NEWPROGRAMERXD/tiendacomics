import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { TiendaRest, Pedido } from '../servicios/tienda-rest';

@Component({
  selector: 'app-form-pedidos',
  imports: [CommonModule, RouterLink],
  templateUrl: './form-pedidos.html',
  styleUrl: './form-pedidos.css'
})
export class FormPedidos {
  private tiendaService = inject(TiendaRest);
  pedidos: Pedido[] = [];
  mensaje = '';

  onListar() {
    this.tiendaService.getPedidos().subscribe({
      next: (data) => {
        console.log('Pedidos recibidos:', data);
        this.pedidos = data;
      },
      error: (err) => {
        console.error('Error al listar pedidos:', err);
        this.mensaje = 'Error al listar pedidos. Verifica el token.';
      }
    });
  }
}