import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: 'servicos-prestados', component: LayoutComponent, canActivate: [AuthGuard], children: [
    {path: 'form', component: ServicoPrestadoFormComponent},
    {path: '', component: ServicoPrestadoListaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
