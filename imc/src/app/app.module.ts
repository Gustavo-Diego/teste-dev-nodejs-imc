import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelaCadastroIMCComponent } from './core/tela-cadastro-imc/tela-cadastro-imc.component';
import { TelaListaComponent } from './core/tela-lista/tela-lista.component';
import { TelaBuscaComponent } from './core/tela-busca/tela-busca.component';

import { SharedModule } from './shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TelaCadastroIMCComponent,
    TelaListaComponent,
    TelaBuscaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
