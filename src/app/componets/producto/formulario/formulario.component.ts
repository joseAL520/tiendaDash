import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers:[ProductoService]
})
export class FormularioProdtoComponent {

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
    } else {
      alert('favo de llenar los campos');
    }


   
  }


}
