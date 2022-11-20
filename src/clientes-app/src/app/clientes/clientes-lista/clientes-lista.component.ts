import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado?: Cliente;
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(private service: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.loadList();
  }

  prepareDelecao(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
  }

  deletar(clienteId: number): void {
    this.service.deletar(clienteId).subscribe(
      () => {
        this.mensagemSucesso = 'Cliente ' + this.clienteSelecionado?.nome + ' excluído com sucesso.';
        this.loadList();
    }, () => this.mensagemErro = 'Ocorreu um erro ao excluir o cliente ' + this.clienteSelecionado?.nome);
  }

  loadList(): void {
    this.service.getClientes().subscribe(res => {
      this.clientes = res;
    });
  }
}
