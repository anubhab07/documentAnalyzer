import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VerifyTemplateComponent } from './verify-template/verify-template.component';
import { GenerateTemplateComponent } from './generate-template/generate-template.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'verify', component: VerifyTemplateComponent},
  {path: 'generate', component: GenerateTemplateComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
