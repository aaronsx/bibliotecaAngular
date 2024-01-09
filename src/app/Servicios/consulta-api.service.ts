import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {
  
  constructor(private http:HttpClient){}
  private Url = 'http://localhost:8080';

hashPassword(password: string): string {
  const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  return hashedPassword;
}
GetTodosLosUsuarios(): Observable<any[]> {
  return this.http.get<any[]>(`${this.Url}/usuarioApi/usuarioSelect`);
}

GetUsuarioID(id:string): Observable<any> {
  return this.http.get(`${this.Url}/usuarioApi/usuarioSelect/`+id);
}

GetUsuarioDNI(dni:string): Observable<any> {
  return this.http.get(`${this.Url}/usuarioApi/usuarioSelect/usuarioDni/`+dni);
}

GetUsuarioTelef(tele:string): Observable<any> {
  return this.http.get(`${this.Url}/usuarioApi/usuarioSelect/usuarioTlf/`+tele);
}

GetUsuarioEmail(email:string): Observable<any> {
  return this.http.get(`${this.Url}/usuarioApi/usuarioSelect/usuarioEmail/`+email);
}

PostUsuario(datos: any): Observable<any> {
  return this.http.post(`${this.Url}/usuarioApi/usuarioInsertar`, datos);
}
 
}

