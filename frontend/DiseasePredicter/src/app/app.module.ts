import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { TuberculosisComponent } from './tuberculosis/tuberculosis.component';
import { HepatitsComponent } from './hepatits/hepatits.component';
import { HomeComponent } from './home/home.component';
import { CkdComponent } from './ckd/ckd.component';
import { RetinopathyComponent } from './retinopathy/retinopathy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DiabetesComponent,
    TuberculosisComponent,
    HepatitsComponent,
    HomeComponent,
    CkdComponent,
    RetinopathyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
