import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { toArray } from 'rxjs';
import { Cliente,Producto } from '../models/compra.model';
import { ClienteService } from '../services/cliente.service';
import { ComprarService } from '../services/comprar.service';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  productos : Producto[]=[];//Todos los productos registrados

  producto! : Producto; //COntiene la informacion del producto

  item : Producto[] = [];

  cantidad: number=0;
 
  cliente : Cliente = this.clienteService.Cliente;


  compraForm!: FormGroup; //formular

  constructor(private productoService:ProductoService, private comprarService:ComprarService,
    private clienteService:ClienteService, private fb: FormBuilder) { }
    
    

  ngOnInit(): void {

    this.compraForm = this.fb.group({
     cliente: [this.cliente],
     producto: [this.item],
     fecha: ['']
    })
    this.traerProductos()
  
  }

  traerProductos(): void{
    this.productoService.traerProducto().subscribe((productos:any) =>{
      this.productos = productos
    })
  }

  guardarItem(){
    this.productos.forEach((element:any) => {
      if(this.compraForm.controls['producto'].value==element.id){
        this.item[this.cantidad]=element
        this.cantidad++
      }
      });
    console.log(this.compraForm.value);
  }

  agregar(){
    this.compraForm.controls['producto'].setValue(this.item)
   
     this.comprarService.agregarCompra(this.compraForm.value).subscribe(data =>{
      console.log(data)
     })

    }
  }



