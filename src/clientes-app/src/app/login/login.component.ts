import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';
import { Notificacao, NotificationType } from '../layout/notificacao/notificacao';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;
  cadastrando = false;

  notificacoes: Notificacao[] = [];

  constructor(
    protected router: Router,
    protected authService: AuthService
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

  cadastrar(): void {
    this.notificacoes = [];
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvar(usuario).subscribe(() => {
      this.notificacoes.push({alertType: NotificationType.SUCCESS, message: 'Cadastro realizado com sucesso. Faça o login'});
    }, errorResponse => {
      errorResponse.error.errors.forEach((e: string) => {
        this.notificacoes.push({alertType: NotificationType.DANGER, message: e});
      });
    })
  }
}
