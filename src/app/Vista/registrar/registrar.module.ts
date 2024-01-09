import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarRoutingModule } from './registrar-routing.module';
import { RegistrarComponent } from './registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    RegistrarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class RegistrarModule { }
