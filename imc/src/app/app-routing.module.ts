import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaBuscaComponent } from './core/tela-busca/tela-busca.component';
import { TelaCadastroIMCComponent } from './core/tela-cadastro-imc/tela-cadastro-imc.component';
import { TelaListaComponent } from './core/tela-lista/tela-lista.component';

const routes: Routes = [
  {path: "home", component: TelaCadastroIMCComponent},
  {path: "lista", component: TelaListaComponent},
  {path: "busca", component: TelaBuscaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
