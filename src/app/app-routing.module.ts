import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cliente/login/login.component';
import { RegistrarComponent } from './cliente/registrar/registrar.component';
import { ComprarComponent } from './comprar/comprar.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { InicioComponent } from './principal/inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
   },
   {
    path:'registrarse',
    component: RegistrarComponent
   },
   {
    path:'comprar',
    component: ComprarComponent
   },
   {
    path:'productos',
    component: ProductoComponent
   },
   {
    path:'inicio',
    component: InicioComponent,
    canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
