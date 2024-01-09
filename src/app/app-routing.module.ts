import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'RE', loadChildren: () => import('./Vista/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionModule) }, { path: 'Registrar', loadChildren: () => import('./Vista/registrar/registrar.module').then(m => m.RegistrarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
