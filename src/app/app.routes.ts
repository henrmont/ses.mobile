import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { logedGuard } from './guards/loged.guard';
import { authGuard } from './guards/auth.guard';
import { authResolver } from './resolvers/auth.resolver';
import { isValidGuard } from './guards/is-valid.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivateChild: [logedGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/auth/auth-index/auth-index.page').then( m => m.AuthIndexPage)
      },
    ]
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    resolve: {user: authResolver},
    canActivateChild: [authGuard, isValidGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/main/main-home/main-home.page').then( m => m.MainHomePage),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/main/main-dashboard/main-dashboard.page').then( m => m.MainDashboardPage),
      },
      {
        path: 'modules',
        loadComponent: () => import('./pages/main/main-modules/main-modules.page').then( m => m.MainModulesPage),
      },
      {
        path: 'notifications',
        loadComponent: () => import('./pages/main/main-notifications/main-notifications.page').then( m => m.MainNotificationsPage),
      },
      {
        path: 'messages',
        loadComponent: () => import('./pages/main/main-messages/main-messages.page').then( m => m.MainMessagesPage),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/main/main-profile/main-profile.page').then( m => m.MainProfilePage),
      },
      {
        path: 'info',
        loadComponent: () => import('./pages/main/main-info/main-info.page').then( m => m.MainInfoPage),
      },
    ]
  },  {
    path: 'sisppi-index',
    loadComponent: () => import('./pages/sisppi/sisppi-index/sisppi-index.page').then( m => m.SisppiIndexPage)
  },
  {
    path: 'sistfd-index',
    loadComponent: () => import('./pages/sistfd/sistfd-index/sistfd-index.page').then( m => m.SistfdIndexPage)
  },


];
