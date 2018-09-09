
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// models
import { Booking } from './../../../../shared/models/booking.models';

@Component({
  selector: 'app-components',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

  booking: Booking;

  constructor() { }

  ngOnInit() {
  }
  registerUser(form: NgForm) {
    console.log(form.value);
  }

}
