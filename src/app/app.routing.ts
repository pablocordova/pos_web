import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CustomersComponent} from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    {   path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard], 
        children: [
            { path: '', redirectTo: 'sales', pathMatch: 'full'},
            { path: 'sales', component: SalesComponent},
            { path: 'inventory', component: InventoryComponent },
            { path: 'customers', component: CustomersComponent },
            { path: 'reports', component: ReportsComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'categories', component: CategoriesComponent }
        ] 
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

export const routing = RouterModule.forRoot(appRoutes);