import { Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { DashboarComponent } from './componets/dashboar/dashboar.component';
import { FormularioContactComponent } from './componets/contacto/formulario/formulario.component';
import { TablaContactComponent } from './componets/contacto/tabla/tabla.component';
import { TablaProductComponent } from './componets/producto/tabla/tabla.component';
import { FormularioProdtoComponent } from './componets/producto/formulario/formulario.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'***',redirectTo:'',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'registrer', component:RegisterComponent},
    {path:'pagePrincipal',component:PagesComponent, children:[
      
      {path:'dashboard',component:DashboarComponent},

      { path:'contacto',
        title:'contaco',
        children:[
          {path:'conctactoFormulario',component:FormularioContactComponent},
          {path:'conctactoTabla',component:TablaContactComponent},
        ]
      },

     {  path:'producto',
        title:'Producto',
        children:[
          {path:'productoFormulario',component:FormularioProdtoComponent},
          {path:'productoTabla',component:TablaProductComponent},
        ]
      },

    ]},
    
    
    
    



  
    
];
