import { Routes } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { CarOrdersComponent } from '../app/car-orders/car-orders.component';
import { CarEditComponent } from '../app/car-edit/car-edit.component';
import { CarDetailComponent } from '../app/car-detail/car-detail.component';

export const APPROUTES: Routes = [

    {path: '', component: AppComponent},
    {path: 'home', component: AppComponent},
    {path: 'add', component:CarEditComponent },
    {path: 'details/:id', component:CarDetailComponent },
    {path: 'orders', component:CarOrdersComponent},
    {path: '**', redirectTo: 'home'}
];