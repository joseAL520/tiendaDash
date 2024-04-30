import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
  providers:[ProductoService]
})
export class TablaProductComponent implements OnInit {
  public listProducto: any[] = [];
  public currentIndex = 0;
  public pageSize = 10;


  constructor(
    private apiProduct : ProductoService
  ){
  }

  ngOnInit(): void {
      this.loadProducto();
  }


  loadProducto(){
    this.apiProduct.getListProduct().subscribe(data => {
      this.listProducto = Object.values(data)
    })
  }


  next(){
    this.currentIndex += this.pageSize;
    this.loadProducto();
  }

  previous() {
    this.currentIndex -= this.pageSize;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    this.loadProducto();
  }

}
