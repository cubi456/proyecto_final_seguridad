import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { DniComponent } from './pages/dni/dni.component';
import { SelfieComponent } from './pages/selfie/selfie.component';
import { DatosComponent } from './pages/datos/datos.component';
import { DniErrorComponent } from './pages/dni-error/dni-error.component';
import { SelfieErrorComponent } from './pages/selfie-error/selfie-error.component';

const routes: Routes = [
  { path:'intro',component:IntroComponent},
  { path:'dni',component:DniComponent},
  { path:'selfie',component:SelfieComponent},
  { path:'datos',component:DatosComponent},
  {
    path:'error',
    children:[
      {path:'dni',component:DniErrorComponent},
      {path:'selfie',component:SelfieErrorComponent},
      {path:'', redirectTo:'/intro', pathMatch:'full'},
      {path: '**', redirectTo: '/intro', pathMatch: 'full'}
    ]
  },
  {
    path: '**',
    redirectTo: 'intro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
