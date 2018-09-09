
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// components
import { BookingComponent } from './components/booking/booking.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BookingComponent,
    LoginComponent, 
    SignUpComponent
  ]
})
export class BookingModule { }
