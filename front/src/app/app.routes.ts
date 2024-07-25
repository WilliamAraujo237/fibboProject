import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PaginaFormularioComponent } from './components/pagina-formulario/pagina-formulario.component';

export const routes: Routes = [
    {path: '', component: PaginaInicialComponent},
    {path: 'formulario', component: PaginaFormularioComponent}
];
