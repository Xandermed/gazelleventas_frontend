import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicioForm!: FormGroup;
  constructor(
    private clienteService: ClienteService, 
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.inicioForm=this.fb.group({
      nick : [''],
      password : ['']
    })
  }
  entrar(){
    this.clienteService.ingresar(this.inicioForm.value).subscribe((data:any) =>{
      console.log(data)
      if(data.mensaje == "Se accedio correctamente"){
          this.router.navigateByUrl("comprar")
      }else{
        alert(data.mensaje)
      }
    })

  }

}
