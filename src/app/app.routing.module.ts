import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IRICComponent } from "./escuela/iric/iric.component";
import { OperasBasComponent } from "./escuela/formularios/operas-bas/operas-bas.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'IRICComponent', component: IRICComponent },
    { path: 'OperasBasComponent', component: OperasBasComponent },
    { path: 'AlumnoReactiveComponent', component: AlumnoReactiveComponent },
    // { path: 'Editar/:id', component: AlumnoEditarComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }