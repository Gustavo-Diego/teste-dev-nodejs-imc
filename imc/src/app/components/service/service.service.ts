import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMC } from '../model/imc.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL = "http://localhost:4040/"

  constructor(
    private http: HttpClient
  ) { }

  createIMC(imc: IMC): Observable<IMC> {
    return this.http.post<IMC>('http://localhost:4040/fazerIMC' , imc)
  }

  readIMC(): Observable<IMC[]>{
    return this.http.get<IMC[]>('http://localhost:4040/imcs')
  }

  searchIMC(imc: IMC): Observable<IMC> {
    return this.http.post<IMC>('http://localhost:4040/buscarPorCPF' , imc)
  }

}

