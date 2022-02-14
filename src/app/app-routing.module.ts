import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAgendaComponent } from './components/create-agenda/create-agenda.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path:'',
    component: ReadAllComponent

  },
  {
    path:'finalizados',
    component: FinalizadosComponent
  },
  {
    path: 'create',
    component: CreateAgendaComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
