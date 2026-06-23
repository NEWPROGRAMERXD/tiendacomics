import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Comic {
  id?: number;
  titulo: string;
  autor: string;
  editorial: string;
  precio: number;
  stock: number;
  genero: string;
  anio: number;
}

export interface Pedido {
  id?: number;
  fecha: string;
  total: number;
  estado: string;
  clienteNombre: string;
  clienteEmail: string;
}

@Injectable({
  providedIn: 'root',
})
export class TiendaRest {
  private http = inject(HttpClient);
  private urlBase = 'http://localhost:8080';
  private token = '';

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Bearer ' + this.token });
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post(this.urlBase + '/auth',
      { username, password },
      { responseType: 'text' }
    );
  }

  // Comics
  getComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(this.urlBase + '/comic/listar',
      { headers: this.getHeaders() }
    );
  }

  crearComic(comic: Comic): Observable<Comic> {
    return this.http.post<Comic>(this.urlBase + '/comic/registrar', comic,
      { headers: this.getHeaders() }
    );
  }

  actualizarComic(id: number, comic: Comic): Observable<Comic> {
    return this.http.put<Comic>(this.urlBase + '/comic/actualizar/' + id, comic,
      { headers: this.getHeaders() }
    );
  }

  eliminarComic(id: number): Observable<string> {
    return this.http.delete(this.urlBase + '/comic/eliminar/' + id,
      { headers: this.getHeaders(), responseType: 'text' }
    );
  }

  // Pedidos
  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.urlBase + '/pedido/listar',
      { headers: this.getHeaders() }
    );
  }

  crearPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.urlBase + '/pedido/registrar', pedido,
      { headers: this.getHeaders() }
    );
  }
}