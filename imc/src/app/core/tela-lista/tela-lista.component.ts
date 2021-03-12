import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/components/service/service.service';

@Component({
  selector: 'app-tela-lista',
  templateUrl: './tela-lista.component.html',
  styleUrls: ['./tela-lista.component.scss']
})
export class TelaListaComponent implements OnInit {

  IMCs = []

  constructor(
    private service: ServiceService,
  ) { }

  ngOnInit(): void {
    this.recuperaIMCs()
  }

  recuperaIMCs(){
    this.service.readIMC().subscribe( linkServe =>{
      this.IMCs = linkServe
      console.log(this.IMCs)
    })
  }

}
