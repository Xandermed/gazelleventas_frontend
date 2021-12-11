import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos: Producto[]=[];
  
  ProductoForm! : FormGroup;
  constructor(private productoService : ProductoService, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.ProductoForm=this.fb.group({
      nombreProducto:['',Validators.required],
      precio:[''],
      cantidad:['']
    })
    this.traerProducto();
  }
  
  traerProducto(){
    this.productoService.traerProducto().subscribe((respuesta:any) =>{
      console.log(respuesta)
      this.productos = respuesta;
    })
  }

  enviar(){
    console.log(this.ProductoForm.status)
    if(this.ProductoForm.status == "VALID"){
      this.productoService.agregarProducto(this.ProductoForm.value).subscribe((respuesta:any) =>{
        console.log(respuesta)
        if(respuesta.estado == "true"){
          this.traerProducto();
          this.ProductoForm=this.fb.group({
            nombreProducto:[''],
            precio:[''],
            cantidad:['']
          })
        }
  
      })

    }else{
      alert("No puede existir campos vacios")
    }
   
  }
}
