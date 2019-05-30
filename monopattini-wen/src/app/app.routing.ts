import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HomeComponent } from './home/index';
import { GuastoComponent } from './guasto/index';
import { MapComponent } from './map/index';
import { QrCodeComponent } from './qr-code/index';
import { ProfiloComponent } from './profilo/index';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'map', component: MapComponent },
    { path: 'guasto', component: GuastoComponent },
    { path: 'qr-code', component: QrCodeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profilo', component: ProfiloComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
