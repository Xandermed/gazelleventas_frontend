import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
    this.consumirProducto()
  }

  consumirProducto(){
    return this.productoService.traerProducto().subscribe(respuesta =>{
    console.log(respuesta)  
    })
  }

}
