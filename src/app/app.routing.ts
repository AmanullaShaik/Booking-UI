import { BookingComponent } from './modules/booking/components/booking.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'content'},
  { path: 'booking', component: BookingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);