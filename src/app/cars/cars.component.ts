import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/model/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;


  constructor() {
    this.cars = [
      new Car(1, 'Ford', 'Focus', 87, '../assets/images/ford-focus.jpg', 0),
      new Car(2, 'Ford', 'Ka', 67, '../assets/images/ford-ka.jpg', 0),
      new Car(3, 'Ford', 'Mondeo', 127, '../assets/images/ford-mondeo.jpg', 0),
      new Car(4, 'Ford', 'Galaxy', 148, '../assets/images/ford-galaxy.jpg', 0),
      new Car(5, 'Ford', 'Mustang', 212, '../assets/images/ford-mustang.jpg', 0),
      new Car(6, 'Volkswagen', 'Polo', 77, '../assets/images/volkswagen-polo.jpg', 0),
      new Car(7, 'Volkswagen', 'Jetta', 97, '../assets/images/volkswagen-jetta.jpg', 0),
      new Car(8, 'Volkswagen', 'Fox', 69, '../assets/images/volkswagen-fox.jpg', 0)
    ]
  }

  ngOnInit(): void {
  }

  getCar(car: Car): void {
    console.log('selected car: ', car.id, ' ', car.merk, ' ', car.type);
    this.selectedCar = car;
  }

  clearCar(): void {
    this.selectedCar = null;
  }

  updateRating(rating) {
    this.selectedCar.rating += rating;
  }
}
