import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConsultaApiService } from 'src/app/Servicios/consulta-api.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  form = this.formBuilder.group({
    nombre:['',[Validators.required,Validators.minLength(2)]],
    apellido:['',[Validators.required,Validators.minLength(2)]],
    telefono:['',[Validators.required,Validators.maxLength(9)]],
    correo:['',[Validators.required, Validators.email]],
    dni: ['', [Validators.required, Validators.maxLength(9)]],
    pass: ['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(private formBuilder: FormBuilder, private fbApi:ConsultaApiService) { }

  registrar(){
    
  }
}
