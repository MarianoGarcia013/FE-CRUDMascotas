import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { SharedModule } from './shared/shared.module';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarMascotasComponent } from './components/agregar-editar-mascotas/agregar-editar-mascotas.component';
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMascotasComponent,
    ListadoMascotasComponent,
    VerMascotaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    SharedModule  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
