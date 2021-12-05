import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  datosCliente!: FormGroup;
  constructor(private clienteService: ClienteService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.datosCliente=this.fb.group({
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      ciudad: [''],
      correo: [''],
      nick: [''],
      password: ['']
    })
  }
  crearCliente(){
    this.clienteService.registrarClientes(this.datosCliente.value).subscribe(respuesta =>{
      console.log(respuesta)
    })
  }

}
