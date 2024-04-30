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
        // Verificar si hay datos y limitar a 10 personas si es necesario
        if (response) {
          const contactsArray = Object.values(response);
          if (contactsArray.length > 10) {
            return contactsArray.slice(0, 10); // Limitar a los primeros 10 elementos
          } else {
            return contactsArray; // Devolver todos los elementos si son menos de 10
          }
        } else {
          return []; // Si no hay datos, devolver un array vacío
        }
      })
    );
  }


  registrarContacto(data:Contacto){
    return this.http.post(`${this.apiUrl}/contacto.json`,data)
  }
  
}
