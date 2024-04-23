import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  menuItems = [
    { label: 'Dashboard', route: '/dashboard' },
    {
      label: 'Contacto', children: [
        { label: 'Formulario', route: '/contacto/conctactoFormulario' },
        { label: 'Tabla', route: '/contacto/conctactoTabla' }
      ]
    },
    {
      label: 'Producto', children: [
        { label: 'Formulario', route: '/producto/productoFormulario' },
        { label: 'Tabla', route: '/producto/productoTabla' }
      ]
    }
  ];




}
