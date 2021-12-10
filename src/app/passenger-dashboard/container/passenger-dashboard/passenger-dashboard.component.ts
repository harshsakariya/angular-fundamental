import { Component, OnInit } from "@angular/core";
import { errorMonitor } from "events";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count 
        [items]="passengers">
      </passenger-count>
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullName }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];

  constructor(){}

  ngOnInit(){
    this.passengers = [
      {
        id: 1,
        fullName: 'Stephen',
        checkedIn: true,
        checkInDate: 1637599685240,
        children: null
      },
      {
        id: 2,
        fullName: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
      },
      {
        id: 3,
        fullName: 'James',
        checkedIn: true,
        checkInDate: 1636519585000,
        children: null
      },
      {
        id: 4,
        fullName: 'Louise',
        checkedIn: true,
        checkInDate: 1137599675140,
        children: [{ name: 'Jessica', age: 20 }]
      },
      {
        id: 5,
        fullName: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      },
    ]
  }

  handleRemove(event){
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)
  }

  handleEdit(event){
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id){
        return Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}