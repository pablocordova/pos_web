import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CustomersComponent} from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'sales', component: SalesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', redirectTo:'' }
];

export const routing = RouterModule.forRoot(appRoutes);