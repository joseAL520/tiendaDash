import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers: [ContactoService]
})
export class FormularioContactComponent {
  public smsValid: boolean = false

  formularioContacto: FormGroup 

  constructor(
      private form: FormBuilder,
      private _servicioContacto: ContactoService
  ){
    this.formularioContacto = this.form.group({
        numeroIdentfiacion: ['',[Validators.required, Validators.minLength(9),Validators.pattern('^[0-9]+$')]],
        nombre: ['',[Validators.required]],
        apellido: ['',[Validators.required]],
        correo: ['',[Validators.required,Validators.email]],
        numero: ['',[Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]+$')]],
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
      this._servicioContacto.registrarContacto(contactoData).subscribe()
      this.formularioContacto.reset()

      this.smsValid = true
      setTimeout(() => {
        this.smsValid = false
      }, 3000);

    } else {
     
      alert('favo de llenar los campos');
    }
    }


}
