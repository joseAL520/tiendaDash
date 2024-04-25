import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioContactComponent {


  formularioContacto: FormGroup 

  constructor(
      private form: FormBuilder,
      // private _servicioContacto: ServicioContactoService
  ){
    this.formularioContacto = this.form.group({
        numeroIdentfiacion: ['',[Validators.required, Validators.minLength(9)]],
        nombre: ['',[Validators.required]],
        apellido: ['',[Validators.required]],
        correo: ['',[Validators.required]],
        numero: ['',[Validators.required, Validators.minLength(10)]],
        direccion: ['',[Validators.required]],
        describcion: [''],
    })
  }


  validator(controlName: string , tipoError:string){
    return this.formularioContacto.get(controlName)?.hasError(tipoError) && this.formularioContacto.get(controlName)?.touched
  }

  addProduct(){

    if (this.formularioContacto.valid) {
      const contactoData = this.formularioContacto.value;
      // this._servicioContacto.registrarContacto(contactoData).subscribe()
      this.formularioContacto.reset()
    } else {
      alert('favo de llenar los campos');
    }
    }


}
