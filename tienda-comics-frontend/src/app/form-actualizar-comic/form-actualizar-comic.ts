import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { TiendaRest } from '../servicios/tienda-rest';

@Component({
  selector: 'app-form-actualizar-comic',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-actualizar-comic.html',
  styleUrl: './form-actualizar-comic.css'
})
export class FormActualizarComic implements OnInit {
  private tiendaService = inject(TiendaRest);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  miForm!: FormGroup;
  mensaje = '';
  comicId = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.miForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      genero: ['', Validators.required],
      anio: ['', [Validators.required, Validators.min(1900)]]
    });

    this.route.params.subscribe(params => {
      this.comicId = params['id'];
      console.log('Comic ID:', this.comicId);
    });
  }

  onSubmit() {
    console.log('Data del formulario:', this.miForm.value);
    this.tiendaService.actualizarComic(this.comicId, this.miForm.value).subscribe({
      next: (data) => {
        console.log('Comic actualizado:', data);
        this.mensaje = 'Comic actualizado correctamente';
        this.router.navigate(['/comics']);
      },
      error: (err) => {
        console.error('Error al actualizar comic:', err);
        this.mensaje = 'Error al actualizar comic';
      }
    });
  }
}