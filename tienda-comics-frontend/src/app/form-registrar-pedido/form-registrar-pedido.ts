import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TiendaRest, Comic } from '../servicios/tienda-rest';

@Component({
  selector: 'app-form-registrar-pedido',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-registrar-pedido.html',
  styleUrl: './form-registrar-pedido.css'
})
export class FormRegistrarPedido implements OnInit {
  private tiendaService = inject(TiendaRest);
  private router = inject(Router);
  mensaje = '';
  comics: Comic[] = [];
  comicSeleccionado: Comic | null = null;
  cantidad = 1;

  ngOnInit() {
    this.tiendaService.getComics().subscribe({
      next: (data) => this.comics = data,
      error: (err) => console.error('Error al cargar comics:', err)
    });
  }

  onComicChange(id: number) {
    this.comicSeleccionado = this.comics.find(c => c.id == id) || null;
    this.cantidad = 1;
  }

  calcularTotal(): number {
    if (!this.comicSeleccionado) return 0;
    return this.comicSeleccionado.precio * this.cantidad;
  }

  onSubmit(form: NgForm) {
    if (!this.comicSeleccionado) return;

    // Verificar stock
    if (this.cantidad > this.comicSeleccionado.stock) {
      this.mensaje = 'No hay suficiente stock disponible';
      return;
    }

    const pedido = {
      fecha: form.value.fecha,
      total: this.calcularTotal(),
      estado: 'PENDIENTE',
      clienteNombre: form.value.clienteNombre,
      clienteEmail: form.value.clienteEmail
    };

    // 1. Crear el pedido
    this.tiendaService.crearPedido(pedido).subscribe({
      next: () => {
        // 2. Actualizar stock del comic
        const comicActualizado: Comic = {
          ...this.comicSeleccionado!,
          stock: this.comicSeleccionado!.stock - this.cantidad
        };
        this.tiendaService.actualizarComic(
          this.comicSeleccionado!.id!, 
          comicActualizado
        ).subscribe({
          next: () => {
            this.mensaje = '¡Pedido registrado y stock actualizado!';
            this.router.navigate(['/pedidos']);
          },
          error: (err) => console.error('Error al actualizar stock:', err)
        });
      },
      error: (err) => {
        console.error('Error:', err);
        this.mensaje = 'Error al registrar pedido';
      }
    });
  }
}