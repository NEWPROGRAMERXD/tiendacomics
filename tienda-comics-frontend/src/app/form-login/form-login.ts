import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TiendaRest } from '../servicios/tienda-rest';

@Component({
  selector: 'app-form-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css'
})
export class FormLogin {
  private tiendaService = inject(TiendaRest);
  private router = inject(Router);
  mensaje = '';

  onSubmit(form: NgForm) {
    console.log('Data del formulario:', form.value);
    this.tiendaService.login(form.value.username, form.value.password).subscribe({
      next: (token) => {
        console.log('Token recibido:', token);
        this.tiendaService.setToken(token);
        this.mensaje = 'Login exitoso';
        this.router.navigate(['/comics']);
      },
      error: (err) => {
        console.error('Error al iniciar sesion:', err);
        this.mensaje = 'Credenciales incorrectas';
      }
    });
  }
}