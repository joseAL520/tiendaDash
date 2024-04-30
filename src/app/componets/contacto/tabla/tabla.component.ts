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

  public listaContacto: any[] = [];
  public currentIndex = 0;
  public pageSize = 10;

  constructor(private contacto: ContactoService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contacto.getListContact().subscribe(data => {
      this.listaContacto = Object.values(data);
    });
  }

  next() {
    this.currentIndex += this.pageSize;
    this.loadContacts();
  }

  previous() {
    this.currentIndex -= this.pageSize;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    this.loadContacts();
  }

}
