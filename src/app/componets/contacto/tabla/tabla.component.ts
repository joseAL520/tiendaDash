import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaContactComponent {

  public listaContacto: any [] = []

 
  constructor(
      //  private _apiMock: ServicioContactoService
  ){}


  ngOnInit():void{
      // this._apiMock.getListContact().subscribe(data => {
      //   this.listaContacto = Object.values(data);
      //   console.log(data);
      // })
  }


}
