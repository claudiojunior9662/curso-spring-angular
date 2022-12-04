import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestado } from './servico-prestado/servico-prestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURLBase = environment.apiURLBase + '/api/servicos-prestados';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(`${this.apiURLBase}`, servicoPrestado);
  }

  buscar(nome: string, mes: number): Observable<ServicoPrestado[]> {
    const httpParams = new HttpParams().set('nome', nome).set('mes', mes.toString());
    return this.http.get<any>(`${this.apiURLBase}?${httpParams.toString()}`);
  }
}
