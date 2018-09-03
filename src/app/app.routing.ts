import { BookingComponent } from './modules/booking/components/booking/booking.component';
import { LoginComponent } from './modules/booking/components/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'content' },
    { path: 'booking', component: BookingComponent },
    { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);