import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingModule } from './modules/booking/booking.module';
import { routing } from './app.routing'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
