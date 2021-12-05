import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private peticion: HttpClient) { }


  traerProducto(){
    return this.peticion.get<Producto>('http://localhost:8080/api/productos')
  }

  agregarProducto(dato: Producto){
    return this.peticion.post("http://localhost:8080/api/productos",dato);

  }
}