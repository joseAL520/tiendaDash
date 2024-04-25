import { Component } from '@angular/core';
import { GrafiLineaNegativeComponent } from "./grafi-linea-negative/grafi-linea-negative.component";
import { GraficLineaComponent } from "./grafic-linea/grafic-linea.component";
import { GraficPastelComponent } from "./grafic-pastel/grafic-pastel.component";

@Component({
    selector: 'dashboar-form-and-grafic',
    standalone: true,
    templateUrl: './form-and-grafic.component.html',
    styleUrl: './form-and-grafic.component.css',
    imports: [GrafiLineaNegativeComponent, GraficLineaComponent, GraficPastelComponent]
})
export class FormAndGraficComponent {

}
