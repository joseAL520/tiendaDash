import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';
import { CategoriaProducto, categoriProducto } from '../../../interfaces/categoria.producto.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers:[ProductoService]
})
export class FormularioProdtoComponent {
  public smsValid: boolean = false
  categorias: CategoriaProducto[] = categoriProducto;
  nombre: string = "miguel";
  formularioProducto: FormGroup;



  constructor (
    private form: FormBuilder,
    private apiProduct: ProductoService,
  ){
    this.formularioProducto = this.form.group({
        idProducto: ['',[Validators.required]],
        nombreProducto: ['',[Validators.required]],
        marcaProducto: ['',[Validators.required]],
        categoria: ['',[Validators.required]],
        proveedor: ['',[Validators.required]],
        descripcion: [''],
    })
  }

  validator(controlName: string , tipoError:string){
    return this.formularioProducto.get(controlName)?.hasError(tipoError) && this.formularioProducto.get(controlName)?.touched
  }


  addProduct(){

    if (this.formularioProducto.valid) {
      const productoData = this.formularioProducto.value;
      this.apiProduct.registrarProdcto(productoData).subscribe()
      this.formularioProducto.reset()
      this.smsValid = true
      setTimeout(() => {
        this.smsValid = false
      }, 3000);

    } else {
      alert('favo de llenar los campos');
    }


   
  }


}
