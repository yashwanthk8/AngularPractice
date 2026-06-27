import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSearchComponent } from './dashboard/user-search/user-search.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'search', component: UserSearchComponent }
];
