import { Routes } from '@angular/router';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'product-filter', component: ProductFilterComponent },
  {path: '',component: DashboardComponent}
];
