import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Cliente } from '../models/compra.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  
  private cliente!: Cliente;

  get Cliente() {
    return this.cliente;
  }
   

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

  registrarClientes(datos:any){
    return this.peticion.post('http://localhost:8080/api/clientes', datos,this.headers)
  }

  ingresar(datosLogin:any){
    return this.peticion.post('http://localhost:8080/api/clientes/login', datosLogin, this.headers)
    .pipe(
      tap((respuesta:any) =>{
        if(respuesta.mensaje == "Se accedio correctamente"){
          localStorage.setItem("token",respuesta.hash)
          this.cliente=respuesta
        }
      }),
      map(respuesta => respuesta)
    )
  }

  get auto(){
    return {headers: {'Authorization': this.getToken()}}
  }
  verificarToken():Observable<boolean>{
    return this.peticion.get('http://localhost:8080/api/verificar', 
     this.auto).pipe(
      map((respuesta:any) =>{
        console.log(respuesta);
        if(respuesta.ok){
          return respuesta.ok;  
        }
      }),
      catchError(err => of(false))
    )
  }
}