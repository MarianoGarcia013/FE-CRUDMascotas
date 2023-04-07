import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { AgregarEditarMascotasComponent } from './components/agregar-editar-mascotas/agregar-editar-mascotas.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [  // Rutas para mostrar en la pantalla
  { path: '', redirectTo: 'LISTADO_MASCOTAS', pathMatch: 'full' },
  { path: 'LISTADO_MASCOTAS', component: ListadoMascotasComponent },
  { path: 'agregarMascota', component: AgregarEditarMascotasComponent },
  { path: 'verMascota/: id', component: VerMascotaComponent },
  { path: 'editarMascota/:id', component: AgregarEditarMascotasComponent },
  { path: '**', redirectTo: 'LISTADO_MASCOTAS', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
