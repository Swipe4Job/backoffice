import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./features/users/pages/user.routing').then(m => m.USER_ROUTES)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'users'
  }
];
