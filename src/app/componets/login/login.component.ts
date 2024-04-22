import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public formLogin: FormGroup

  constructor (
      private formBuilder: FormBuilder
  ){  
    this.formLogin = formBuilder.group({
        user:     ['',[Validators.required]],
        password: ['',[Validators.required]]
    })
  }

  validator(controlName:string, typeError:string){
    return this.formLogin.get(controlName)?.hasError(typeError) && this.formLogin.get(controlName)?.touched;
  }

  login(){
    if(this.formLogin.status === 'INVALID'){
      alert('FAVOR DE LLENAR TODO LOS CAMPOS')
    }else{
      console.log('goo');
    }

  }

}
