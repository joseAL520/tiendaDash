import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl: string = 'https://gestor-inventario-d9a16-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }


  // getListContact():Observable<any>{
  //   return this.http.get(`${this.apiUrl}/contacto.json`,{limitToFirst: '10' });
  // }

  getListContact(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contacto.json`).pipe(
      map((response: any) => {
        if (response) {
          return Object.values(response);
        } else {
          return [];
        }
      })
    );
  }


  registrarContacto(data:Contacto){
    return this.http.post(`${this.apiUrl}/contacto.json`,data)
  }
  
}
