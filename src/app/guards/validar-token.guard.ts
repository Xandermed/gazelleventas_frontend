import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ClienteService } from '../services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  
constructor(private clienteService: ClienteService, private router : Router) {}
  

  canActivate(): Observable<boolean> | boolean {
    return this.clienteService.verificarToken().pipe(
      tap((valido) => {
        if(!valido){
          this.router.navigateByUrl("")
        }
      })
    )
  }
  canLoad(): Observable<boolean> | boolean {
    return this.clienteService.verificarToken().pipe(
      tap((valido) => {
        if(!valido){
          this.router.navigateByUrl("")
        }
      })
    )
  }
}
