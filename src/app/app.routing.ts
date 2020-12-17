import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar Componentes
import { ContactoComponent} from './components/contacto/contacto.component';
import { HomeComponent} from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';


//Definir Rutas
const appRoutes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: '', component: HomeComponent},
	{path: '**', component: ErrorComponent} // solo para verificar si funcionan bien las rutas

];

//Exportar configuracion de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);