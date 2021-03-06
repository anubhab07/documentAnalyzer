import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyTemplateComponent } from './verify-template/verify-template.component';

import { MDBBootstrapModule, CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { UploadTemplateComponent } from './upload-template/upload-template.component';
import { HomeComponent } from './home/home.component';
import { GenerateTemplateComponent } from './generate-template/generate-template.component';

@NgModule({
  declarations: [
    AppComponent,
    VerifyTemplateComponent,
    UploadTemplateComponent,
    HomeComponent,
    GenerateTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
