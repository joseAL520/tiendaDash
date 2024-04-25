import { Component } from '@angular/core';
import { CartInfComponent } from "./cart-inf/cart-inf.component";
import { FormAndGraficComponent } from "./form-and-grafic/form-and-grafic.component";

@Component({
    selector: 'app-dashboar',
    standalone: true,
    templateUrl: './dashboar.component.html',
    styleUrl: './dashboar.component.css',
    imports: [CartInfComponent, FormAndGraficComponent]
})
export class DashboarComponent {

}
