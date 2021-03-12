import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMC } from 'src/app/components/model/imc.model';
import { ServiceService } from 'src/app/components/service/service.service';

@Component({
  selector: 'app-tela-cadastro-imc',
  templateUrl: './tela-cadastro-imc.component.html',
  styleUrls: ['./tela-cadastro-imc.component.scss']
})
export class TelaCadastroIMCComponent implements OnInit {

  credentials: FormGroup

  imc: IMC ={
    nome: '',
    cpf: '',
    altura: 0,
    peso: 0
  }

  constructor(
    private service: ServiceService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.credentials = this.formBuilder.group({
      nome: [""],
      cpf: [""],
      altura: [""],
      peso: [""],
    });
  }

  criarIMC(): void{

    this.imc.nome = this.credentials.get("nome").value
    this.imc.cpf = this.credentials.get("cpf").value
    this.imc.altura = this.credentials.get("altura").value
    this.imc.peso = this.credentials.get("peso").value

    this.service.createIMC(this.imc).subscribe( imc =>{
      this.imc = imc
      alert((this.imc.nome + ' seu IMC: ' + this.imc.imc + ', e você esta: ' + this.imc.desc))
    })

  }

  get nome(){
    return this.credentials.get('nome').value
  }

  get cpf(){
    return this.credentials.get('cpf').value
  }

  get altura(){
    return this.credentials.get('altura').value
  }

  get peso(){
    return this.credentials.get('peso').value
  }

}
