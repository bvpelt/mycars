import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import { Car } from '../shared/model/car.model';
import { CarOrdersService } from '../car-orders.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit, AfterContentInit {

  @Input() car: Car;
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();
  id: number;

  constructor(private carorderservice: CarOrdersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // First initialize @Input
  // then subscribe to route parameters
  ngAfterContentInit(): void {
    this.route.params
      .subscribe((params: any) => {
        this.id = params.id;
        //console.log('Received routing parameters: ', params);
        //console.log('searching car with id ', this.id);

        var cars: Car[] = JSON.parse(localStorage.getItem("orders"));

        if (cars !== null) {
          this.car = cars.find((currentcar) => currentcar.id == this.id);
        } /* else {
          this.car = null;
        } */
      },
        error => console.log('Error receiving parameter id'),
        () => {
        }
      )
  }

  increment(): void {
    console.log('Rating increment for ', this.car.merk, ' ', this.car.type);
    this.rating.emit(1);
  }

  decrement(): void {
    console.log('Rating decrement for ', this.car.merk, ' ', this.car.type);
    this.rating.emit(-1);
  }

  booknow(car: Car): void {
    console.log('Book order for car', this.car.merk, ' ', this.car.type);
    this.carorderservice.order$.next(car);
  }
}
