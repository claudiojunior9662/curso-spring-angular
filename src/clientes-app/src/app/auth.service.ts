import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './login/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + '/api/usuarios';
  tokenUrl: string = environment.apiURLBase + environment.obterTokenUrl;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, protected router: Router) { }

  obterToken(): string | null {
    const tokenString = localStorage.getItem('token');
    if (tokenString) {
      return JSON.parse(tokenString).access_token;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();
    if(token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  encerrarSessao(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUsuarioLogado(): string | null {
    const token = this.obterToken();
    if(token) {
      const usuario = this.jwtHelper.decodeToken(token).user_name;
      return usuario;
    }
    return null;
  }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.apiURL}`, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${environment.clientId}:${environment.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenUrl, params.toString(), { headers });
  }
}
