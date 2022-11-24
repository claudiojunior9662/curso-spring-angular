import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURLBase = environment.apiURLBase + '/api/clientes';

  constructor(
    private http: HttpClient
  ) { }

  salvar(cliente:Cliente): Observable<Cliente> {
    return this.http.post(`${this.apiURLBase}`, cliente);
  }

  atualizar(cliente:Cliente): Observable<any> {
    return this.http.put(`${this.apiURLBase}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURLBase}`);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiURLBase}/${id}`);
  }

  deletar(clienteId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURLBase}/${clienteId}`);
  }
}
