import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuaroService } from '../usuario/usuaro.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuaroService,
    public router: Router){}
  canActivate(){

    if ( this._usuarioService.estaLogueado() ){
      console.log('paso el guard');
      return true;
    }else{
      console.log('bloqueado por guard');
      this.router.navigate(['/login']);
      return false;
    }
    

   
  }
  
}
