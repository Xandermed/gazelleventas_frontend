import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/compra.model';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {

  constructor(private peticion: HttpClient) { }

  
  getToken(){
    return localStorage.getItem("token")||'';
  }
  
  /**
   * Se contruye la cabecera de la pericion y se envia el token 
   * 
   */
  get headers(){
    return {headers: {'Authorization': this.getToken()}}
  }

  agregarCompra(dato: Compra){
    return this.peticion.post("http://localhost:8080/api/compras",dato);

  }
  traerCompra(){
    return this.peticion.get<Compra>('http://localhost:8080/api/compras',this.headers)
  }

}