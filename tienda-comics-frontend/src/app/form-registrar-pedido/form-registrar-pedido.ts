import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TiendaRest } from '../servicios/tienda-rest';

@Component({
  selector: 'app-form-registrar-pedido',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-registrar-pedido.html',
  styleUrl: './form-registrar-pedido.css'
})
export class FormRegistrarPedido {
  private tiendaService = inject(TiendaRest);
  private router = inject(Router);
  mensaje = '';

  onSubmit(form: NgForm) {
    console.log('Data del formulario:', form.value);
    this.tiendaService.crearPedido(form.value).subscribe({
      next: (data) => {
        console.log('Pedido creado:', data);
        this.mensaje = 'Pedido registrado correctamente';
        this.router.navigate(['/pedidos']);
      },
      error: (err) => {
        console.error('Error al registrar pedido:', err);
        this.mensaje = 'Error al registrar pedido';
      }
    });
  }
}