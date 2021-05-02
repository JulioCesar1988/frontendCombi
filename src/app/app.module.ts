import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarusuarioComponent } from './navbarusuario/navbarusuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaViajesComponent } from './lista-viajes/lista-viajes.component';
import { AddViajeComponent } from './add-viaje/add-viaje.component';
import { AddVehiculoComponent } from './add-vehiculo/add-vehiculo.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarusuarioComponent,
    AddUsuarioComponent,
    ListaUsuariosComponent,
    ListaViajesComponent,
    AddViajeComponent,
    AddVehiculoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent,NavbarusuarioComponent,AddUsuarioComponent,
              ListaUsuariosComponent,ListaViajesComponent,AddViajeComponent,AddVehiculoComponent,FooterComponent]
})
export class AppModule { }
