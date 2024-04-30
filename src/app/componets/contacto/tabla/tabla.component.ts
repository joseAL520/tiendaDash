import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
  providers: [ContactoService]
})
export class TablaContactComponent  implements OnInit{

   public listaContacto: any [] = []

 
  constructor(
      private contacto : ContactoService,
  ){}

  


  ngOnInit(): void {
     this.contacto.getListContact().subscribe(data =>{
      this.listaContacto = Object.values(data);
     })
  }

}
