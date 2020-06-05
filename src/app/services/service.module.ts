import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';




import { 

  SettingsService,
  SidebarService,
  SharedService,
  LoginGuardGuard,
  UsuaroService

 } from './service.index';

 
@NgModule({

  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    LoginGuardGuard,
    UsuaroService
  ],
  declarations: [],

})
export class ServiceModule { }
