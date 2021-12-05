import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private peticion: HttpClient) { }


  registrarClientes(datos:any){
    return this.peticion.post('http://localhost:8080/api/clientes', datos)
  }

  ingresar(datosLogin:any){
    return this.peticion.post('http://localhost:8080/api/clientes/login', datosLogin)
  }


}