import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserAdmService } from '../../services/user-adm.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserAdmService]
})
export class LoginComponent implements OnInit{

  public userAdmin: any[] = [];
  public formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiUser: UserAdmService
  ) {
    this.formLogin = formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  extraccionUser() {
    this.apiUser.getUser().subscribe(data => {
      this.userAdmin = Object.values(data);
    });
  }

  validator(controlName: string, typeError: string) {
    return this.formLogin.get(controlName)?.hasError(typeError) && this.formLogin.get(controlName)?.touched;
  }


  login() {
    if (this.formLogin.invalid) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const username = this.formLogin.get('user')?.value;
    const password = this.formLogin.get('password')?.value;
    
    const user = this.userAdmin.find(data => data.correo === username && data.clave === password);

    if (user) {
      // Inicio de sesión exitoso, redirige al componente principal
      this.router.navigate(['/pagePrincipal']);
    } else {
      // Nombre de usuario o contraseña incorrectos
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }

  ngOnInit(): void {
    this.extraccionUser();
  }
}
