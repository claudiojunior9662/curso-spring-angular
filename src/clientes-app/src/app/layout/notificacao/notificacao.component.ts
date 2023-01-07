import { Component, Input, OnInit } from '@angular/core';
import { Notificacao } from './notificacao';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {
  @Input() notificacoes: Notificacao[] = [];

  constructor() { }

  ngOnInit(): void {
    this.notificacoes = [];
  }

  getClass(notificacao: Notificacao): string {
    return 'alert alert-' + notificacao.alertType;
  }
}
