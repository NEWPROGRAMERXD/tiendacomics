import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TiendaRest } from '../servicios/tienda-rest';

@Component({
  selector: 'app-form-registrar-comic',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-registrar-comic.html',
  styleUrl: './form-registrar-comic.css'
})
export class FormRegistrarComic implements OnInit {
  private tiendaService = inject(TiendaRest);
  private router = inject(Router);
  miForm!: FormGroup;
  mensaje = '';

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
  }

  onSubmit() {
    console.log('Data del formulario:', this.miForm.value);
    this.tiendaService.crearComic(this.miForm.value).subscribe({
      next: (data) => {
        console.log('Comic creado:', data);
        this.mensaje = 'Comic registrado correctamente';
        this.router.navigate(['/comics']);
      },
      error: (err) => {
        console.error('Error al registrar comic:', err);
        this.mensaje = 'Error al registrar comic';
      }
    });
  }
}