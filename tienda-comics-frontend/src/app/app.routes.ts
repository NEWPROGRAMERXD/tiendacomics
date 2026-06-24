import { Routes } from '@angular/router';
import { FormLogin } from './form-login/form-login';
import { FormComics } from './form-comics/form-comics';
import { FormRegistrarComic } from './form-registrar-comic/form-registrar-comic';
import { FormActualizarComic } from './form-actualizar-comic/form-actualizar-comic';
import { FormPedidos } from './form-pedidos/form-pedidos';
import { FormRegistrarPedido } from './form-registrar-pedido/form-registrar-pedido';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: FormLogin, title: 'TiendaComics' },
    { path: 'comics', component: FormComics, title: 'TiendaComics' },
    { path: 'registrar-comic', component: FormRegistrarComic, title: 'TiendaComics' },
    { path: 'actualizar-comic/:id', component: FormActualizarComic, title: 'TiendaComics' },
    { path: 'pedidos', component: FormPedidos, title: 'Pedidos' },
    { path: 'registrar-pedido', component: FormRegistrarPedido, title: 'TiendaComics' },
];