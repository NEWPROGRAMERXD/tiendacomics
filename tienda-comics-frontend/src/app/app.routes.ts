import { Routes } from '@angular/router';
import { FormLogin } from './form-login/form-login';
import { FormComics } from './form-comics/form-comics';
import { FormRegistrarComic } from './form-registrar-comic/form-registrar-comic';
import { FormActualizarComic } from './form-actualizar-comic/form-actualizar-comic';
import { FormPedidos } from './form-pedidos/form-pedidos';
import { FormRegistrarPedido } from './form-registrar-pedido/form-registrar-pedido';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: FormLogin, title: 'Login' },
    { path: 'comics', component: FormComics, title: 'Comics' },
    { path: 'registrar-comic', component: FormRegistrarComic, title: 'Registrar Comic' },
    { path: 'actualizar-comic/:id', component: FormActualizarComic, title: 'Actualizar Comic' },
    { path: 'pedidos', component: FormPedidos, title: 'Pedidos' },
    { path: 'registrar-pedido', component: FormRegistrarPedido, title: 'Registrar Pedido' },
];