import { Component, OnInit } from '@angular/core';
import { UsuaroService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor( public _usuarioService: UsuaroService) { }

  ngOnInit(): void {
  }




}
