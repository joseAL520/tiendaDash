import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAdmService {

  private apiUrl: string = 'https://gestor-inventario-d9a16-default-rtdb.firebaseio.com'


  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(`${this.apiUrl}/usuario_Admin.json`);
  }





}
