import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestadoBusca } from '../servico-prestado';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string = "";
  mes: number = 1;
  meses: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  servicos: ServicoPrestadoBusca[] = [];
  message: string = "";

  constructor(protected service: ServicoPrestadoService) { }

  ngOnInit(): void {
  }

  public consultar() {
    this.service.buscar(this.nome, this.mes).subscribe(res => {
      this.servicos = res;
      if(this.servicos.length == 0) {
        this.message = "Nenhum registro encontrado";
      }
    })
  }

}
