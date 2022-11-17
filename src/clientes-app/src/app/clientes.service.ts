import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(cliente:Cliente): Observable<Cliente> {
    return this.http.post('http://localhost:8080/api/clientes', cliente);
  }

  // getClientes(): Observable<Cliente[]> {
  //   return new Observable<[]>;
  // }

  getClientes(): Cliente[] {
    const cliente: Cliente = new Cliente();
    cliente.cpf = '1234567800';
    cliente.dataCadastro = '16/11/2022';
    cliente.id = 1;
    cliente.nome = 'Fulano de tal';
    return [cliente];
  }
}
