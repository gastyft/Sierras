import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComoLlegarComponent } from './components/como-llegar/como-llegar.component';

export const routes: Routes = [

    {path: '', 
    redirectTo: 'header', pathMatch:'full'},
    {path: 'principal', 
    component:PrincipalComponent }, 
    {path: 'header', 
    component:HeaderComponent}, 
    {path: 'contact', 
    component:ContactComponent }, 
    {path: 'footer', 
    component:FooterComponent }, 
    {path: 'como-llegar', 
    component:ComoLlegarComponent }, 
  /*
    { path: '**',  
  component: Error404Component  },
  */
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    
    exports: [RouterModule]
  })
  export class AppRoutingModule { }