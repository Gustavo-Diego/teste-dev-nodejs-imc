import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMC } from 'src/app/components/model/imc.model';
import { ServiceService } from 'src/app/components/service/service.service';

@Component({
  selector: 'app-tela-busca',
  templateUrl: './tela-busca.component.html',
  styleUrls: ['./tela-busca.component.scss']
})
export class TelaBuscaComponent implements OnInit {

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

  busca(): void{

    this.imc.cpf = this.credentials.get("cpf").value

    this.service.searchIMC(this.imc).subscribe( imc =>{
      this.imc = imc
      console.log(this.imc)
    })
  }

  get cpf(){
    return this.credentials.get('cpf').value
  }

}
