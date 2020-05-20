import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarOrdersService } from '../car-orders.service';
import { Car } from '../shared/model/car.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-car-orders',
  templateUrl: './car-orders.component.html',
  styleUrls: ['./car-orders.component.css']
})
export class CarOrdersComponent implements OnInit, OnDestroy {

  orders: Car[] = [];
  private onDestroy$ = new Subject<boolean>();

  constructor(private carorderservice: CarOrdersService) {

  }

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('orders')) || [];

    this.carorderservice.order$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        (car: Car) => {
          this.addCar(car)
          localStorage.setItem('orders', JSON.stringify(this.orders));
        },
        (err) => console.log("Error verwerking car order"),
        () => console.log("Car order verwerkt")
      )
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  addCar(car: Car): void {
    console.log('Toevoegen car', car.merk, ' ', car.type);
    this.orders.push(car);
  }

  cancelorder(car: Car, index: number): void {
    console.log('Verwijderen car ', index, ' ', car.merk, ' ', car.type);
    this.orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

}
