import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Modulos/usuario';
import { ConsultaApiService } from 'src/app/Servicios/consulta-api.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  clave: string = '';
  existe:boolean=false;
  usuarioDTO:Usuario={
    id_usuario: 0, 
    dni_usuario: "",
    apellidos_usuario: '',
    clave_usuario: '',
    email_usuario: '',
    esta_bloqueado_usuario: false,
    nombre_usuario: '',
    tlf_usuario: ''
  }
  form = this.formBuilder.group({
    dni: ['', [Validators.required, Validators.maxLength(9)]],
    pass: ['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(private formBuilder: FormBuilder, private fbApi:ConsultaApiService) { }

  
  iniciarSesion(){
    this.fbApi.GetUsuarioDNI(this.form.value.dni!).subscribe(res=>{
      this.usuarioDTO=res;
      if(this.usuarioDTO==null){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El usuario o la contraseña no coinciden!",
          footer: '<a href="#">Has olvidado tu contraseña</a>'
        });
      }else{
        this.clave=this.fbApi.hashPassword(this.form.value.pass!);
        if(this.clave==this.usuarioDTO.clave_usuario){
            console.log("Se inicio nescion")
        }else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El usuario o la contraseña no coinciden!",
            footer: '<a href="#">Has olvidado tu contraseña</a>'
          });
        }
      }
    });
     
  }
}
