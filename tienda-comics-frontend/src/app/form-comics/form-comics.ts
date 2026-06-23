import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { TiendaRest, Comic } from '../servicios/tienda-rest';

@Component({
  selector: 'app-form-comics',
  imports: [CommonModule, RouterLink],
  templateUrl: './form-comics.html',
  styleUrl: './form-comics.css'
})
export class FormComics {
  private tiendaService = inject(TiendaRest);
  comics: Comic[] = [];
  mensaje = '';

  onListar() {
    this.tiendaService.getComics().subscribe({
      next: (data) => {
        console.log('Comics recibidos:', data);
        this.comics = data;
      },
      error: (err) => {
        console.error('Error al listar comics:', err);
        this.mensaje = 'Error al listar comics. Verifica el token.';
      }
    });
  }

  onEliminar(id: number) {
    this.tiendaService.eliminarComic(id).subscribe({
      next: () => {
        console.log('Comic eliminado');
        this.mensaje = 'Comic eliminado correctamente';
        this.onListar();
      },
      error: (err) => console.error('Error al eliminar:', err)
    });
  }
}