import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { UsuarioGuard } from './services/usuario.guard';
import { AdminGuard } from './services/admin.guard';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { FacturaComponent } from './components/factura/factura.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'usuario',
    component: InicioUsuarioComponent,
    canActivate: [UsuarioGuard],
    children: [
      { path: 'bienvenida', component: BienvenidaComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'habitaciones/:idHotel', component: HabitacionesComponent },
      { path: 'editar-perfil', component: EditarPerfilComponent },
      { path: 'eventos/:idHotel', component: EventosComponent },
      { path: 'servicios/:idHotel', component: ServiciosComponent },
      { path: 'factura', component: FacturaComponent },
    ],
  },
  {
    path: 'admin',
    component: InicioAdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'bienvenida', component: BienvenidaComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'habitaciones/:idHotel', component: HabitacionesComponent },
      { path: 'editar-perfil', component: EditarPerfilComponent },
      { path: 'eventos/:idHotel', component: EventosComponent },
      { path: 'servicios/:idHotel', component: ServiciosComponent },
    ],
  },
  { path: '**', component: BienvenidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
