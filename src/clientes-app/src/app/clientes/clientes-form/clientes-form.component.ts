import { Component, OnInit } from '@angular/core';
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
    private service: ClientesService
  ) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe(res => {
      this.success = true;    
    }, errorRes => {
      this.errors = errorRes.error.errors;
    });
  }

}
