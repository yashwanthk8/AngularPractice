import { Routes } from '@angular/router';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSearchDebounceComponent } from './components/user-search-debounce/user-search-debounce.component';
import { StatemngmntComponent } from './components/statemngmnt/statemngmnt.component';

export const routes: Routes = [
  { path: 'product-filter', component: ProductFilterComponent },
  {path: '',component: DashboardComponent},
  {path:'debounce-search',component:UserSearchDebounceComponent},
  {path:'statemngmnt',component: StatemngmntComponent}
];
