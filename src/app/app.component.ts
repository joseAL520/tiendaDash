import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./componets/login/login.component";
import { RegisterComponent } from "./componets/register/register.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, RegisterComponent]
})
export class AppComponent {
  title = 'ProyectInventari';
}
