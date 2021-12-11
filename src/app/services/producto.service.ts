import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private peticion: HttpClient) { }


/**
 * obtener el token guardado en local storage, de no ser asi se devuelve un string vacio
 * 
 */
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

  traerProducto(){
    return this.peticion.get<Producto>('http://localhost:8080/api/productos',this.headers)
  }

  agregarProducto(dato: Producto){
    return this.peticion.post("http://localhost:8080/api/productos",dato,this.headers);

  }
}