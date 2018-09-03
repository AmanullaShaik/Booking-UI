import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './components/booking/booking.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookingComponent, LoginComponent]
})
export class BookingModule { }
