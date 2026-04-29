import { Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';

export const routes: Routes = [
  { path: '', component: AlumnosComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'cursos', component: CursosComponent }
];