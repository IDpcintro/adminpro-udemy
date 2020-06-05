import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuaroService } from '../services/service.index';
import { Usuario } from '../medels/usuario.model';



declare function init_plugins();

declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']


})
export class LoginComponent implements OnInit {

email: string;
recuerdame: boolean  = false;
auth2: any;

  constructor(public router: Router,
    public _usuarioService: UsuaroService) { }

  ngOnInit(): void {

    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1){
      this.recuerdame = true;
    }

  }
  
  attachSignin(element){
    this.auth2.attachClickHandler( element, {}, (googleUser) =>{

      //let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle( token)
          .subscribe( () => window.location.href = '#/dashboard' );
           

      
    });

  }

googleInit(){
  gapi.load('auth2', () => {
  
    this.auth2 = gapi.auth2.init({
     client_id: '1025064187334-2rurol3tp2o38l6j81qng9v27hirrlsn.apps.googleusercontent.com',
     cookiepolicy: 'single_host_origin',
     scope: 'profile email'

    });

      this.attachSignin( document.getElementById('btnGoogle'));
  });

}



  ingresar( forma: NgForm){

    if (forma.invalid){
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login( usuario, forma.value.recuerdame)
      .subscribe( correcto => this.router.navigate(['/dashboard']));

    
    //console.log(forma.value);

    //this.router.navigate(['/dashboard'])

  }
}
