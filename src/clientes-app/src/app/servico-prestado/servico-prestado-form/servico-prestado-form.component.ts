import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../servico-prestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servicoPrestado: ServicoPrestado;
  success = false;
  errors: string[] = [];

  constructor(private clienteService: ClientesService, protected service: ServicoPrestadoService) { 
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(res => {
      this.clientes = res;
    });
  }

  save(): void {
    this.service.salvar(this.servicoPrestado).subscribe(
      () => {
        this.success = true;
        this.errors = [];
        this.servicoPrestado = new ServicoPrestado();
    }, errorRes => {
      this.success = false;
        this.errors = errorRes.error.errors;
    });
  }

}
