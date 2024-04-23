import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public formRegister: FormGroup
  
  constructor(
    private formBuild: FormBuilder,
    private router: Router
  ){
    this.formRegister = formBuild.group({
      nombre: ['',Validators.required],
      apellido:['',Validators.required],
      sexo: ['',Validators.required],
      numeroCelular: ['',[ Validators.minLength(12)]],
      correo: ['',[Validators.required, Validators.email]],
      clave: ['',[Validators.required, Validators.minLength(8)]],
      claveConfirmacion: ['',[Validators.required, Validators.minLength(8)]]
      
    })
  }

  validator(controlName:string, typeError:string){
    return this.formRegister.get(controlName)?.hasError(typeError) && this.formRegister.get(controlName)?.touched;
  }

  validatorPassword():any{

    if(this.formRegister.value.clave != this.formRegister.value.claveConfirmacion){
        return true
    }

  }

  addUserNew(){
    if(this.formRegister.status === 'INVALID'){
      alert('FAVOR DE LLENAR TODO LOS CAMPOS')
    }else{

      alert('Registrado exitosamnte')
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
      

    }
  }

}
