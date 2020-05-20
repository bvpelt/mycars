import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOrdersComponent } from './car-orders.component';

describe('CarOrdersComponent', () => {
  let component: CarOrdersComponent;
  let fixture: ComponentFixture<CarOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
