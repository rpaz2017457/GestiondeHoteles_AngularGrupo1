import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";
import { BienvenidaComponent } from "./components/bienvenida/bienvenida.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { HabitacionesComponent } from "./components/habitaciones/habitaciones.component";
import { EditarPerfilComponent } from "./components/editar-perfil/editar-perfil.component";
import { RegistrarComponent } from "./components/registrar/registrar.component";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    LoginComponent,
    BienvenidaComponent,
    EventosComponent,
    HabitacionesComponent,
    EditarPerfilComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}