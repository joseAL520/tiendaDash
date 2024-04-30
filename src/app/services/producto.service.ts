import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from '../interfaces/prodcuto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrel: string = 'https://gestor-inventario-d9a16-default-rtdb.firebaseio.com'


  constructor(private http: HttpClient) { }

  getListProduct(): Observable<any> {
    return this.http.get(`${this.apiUrel}/producto.json`).pipe(
      map((response: any) => {
        if (response) {
          return Object.values(response);
        } else {
          return [];
        }
      })
    );
  }


  registrarProdcto(data:Producto){
    return this.http.post(`${this.apiUrel}/producto.json`,data)
  }

  
}
