import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APPROUTES } from './app.routes';
import { MainComponent } from './main/main.component';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarOrdersComponent } from './car-orders/car-orders.component';
import { CarEditComponent } from './car-edit/car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    CarOrdersComponent,
    CarEditComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APPROUTES)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
