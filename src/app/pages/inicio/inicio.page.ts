import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class InicioPage {
  usuario: string = '';
  contrasena: string = '';
  mensaje: string = '';

  constructor(private router: Router) {}

  login() {
    const usuarioValido = '';
    const contrasenaValida = '';

    if (this.usuario === usuarioValido && this.contrasena === contrasenaValida) {
      this.mensaje = '¡Login exitoso!';
      this.router.navigate(['/compras']);
    } else {
      this.mensaje = 'Usuario o contraseña incorrectos.';
    }
  }
}