import {Routes} from "@angular/router";

export const USER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./list-users-page/list-users-page.component').then(c => c.ListUsersPageComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./new-user-page/new-user-page.component').then(c => c.NewUserPageComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
]
