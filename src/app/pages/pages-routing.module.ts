import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDocumentoComponent } from './listar-documento/listar-documento.component';
import { CrearDocumentoComponent } from './crear-documento/crear-documento.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListarDocumentoComponent
  },
  {
    path: 'crear',
    component: CrearDocumentoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
