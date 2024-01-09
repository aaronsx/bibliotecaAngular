import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionComponent } from './inicio-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    InicioSesionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})export class InicioSesionModule { }
