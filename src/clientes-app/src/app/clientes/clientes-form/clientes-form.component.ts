import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if(id) {
      this.service.getClienteById(id).subscribe(res => {
        this.cliente = res;
      })
    } else {
      this.cliente = new Cliente();
    }
  }

  onSubmit() {
    if(this.cliente.id){
      this.service.atualizar(this.cliente).subscribe(() => {
        this.success = true;
         this.errors = [];
      }, errorRes => {
        this.success = false;
        this.errors = errorRes.error.errors;
      });
    } else {
      this.service.salvar(this.cliente).subscribe(res => {
        this.success = true;
         this.errors = [];
         this.cliente = res;
      }, errorRes => {
        this.success = false;
        this.errors = errorRes.error.errors;
      });
    }

  }

  voltarParaListagem(): void {
    this.router.navigate(['/clientes-lista'])
  }

}
