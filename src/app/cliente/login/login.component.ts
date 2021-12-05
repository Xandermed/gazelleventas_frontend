import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicioForm!: FormGroup;
  constructor(private clienteService: ClienteService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inicioForm=this.fb.group({
      nick : [''],
      password : ['']
    })
  }
  entrar(){
    this.clienteService.ingresar(this.inicioForm.value).subscribe(data =>{
      console.log(data)
    })
  }

}
