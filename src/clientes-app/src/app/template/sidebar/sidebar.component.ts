import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string = '';

  constructor(protected authService: AuthService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioLogado() ?? '';
  }

  logout(): void {
    this.authService.encerrarSessao();
  }

}
