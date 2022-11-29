import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string = "";
  mes: number = 1;
  meses: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];

  constructor() { }

  ngOnInit(): void {
  }

  public consultar() {
    console.log(this.nome, this.mes);
  }

}
