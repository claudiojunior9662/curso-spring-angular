import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success = false;
  errors: string[] = [];

  constructor(
    private service: ClientesService,
    private router: Router
  ) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe(res => {
      this.success = true;
       this.errors = [];
       this.cliente = res;
    }, errorRes => {
      this.success = false;
      this.errors = errorRes.error.errors;
    });
  }

  voltarParaListagem(): void {
    this.router.navigate(['/clientes-lista'])
  }

}
