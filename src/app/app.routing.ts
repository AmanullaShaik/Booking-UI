import { BookingComponent } from './modules/booking/components/booking/booking.component';
import { LoginComponent } from './modules/booking/components/login/login.component';
import { SignUpComponent } from './modules/booking/components/sign-up/sign-up.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'booking', component: BookingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);