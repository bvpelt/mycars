import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from '../app/shared/model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarOrdersService {

  order$: Subject<Car>;

  constructor() {
    this.order$ = new Subject<Car>();
  }

}
