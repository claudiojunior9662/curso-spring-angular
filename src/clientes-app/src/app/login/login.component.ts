import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username?: string;
  password?: string;
  loginError = false;
  cadastrando = false;

  constructor(
    protected router: Router
  ) { }

  onSubmit():void {
    this.router.navigate(['/home']);
  }

  preparaCadastrar(event: any): void {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro(): void {
    this.cadastrando = false;
  }
}
