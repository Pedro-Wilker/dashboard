import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'dashboard'
    },
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.routes').then(r => r.PAGES_ROUTES),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    },
    {
        path: 'media',
        loadComponent: () => import('./media/media.component').then(c => c.MediaComponent),
    },
    {
        path: 'products',
        loadComponent: () => import('./products/products.component').then(c => c.ProductsComponent),
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(c => c.SettingsComponent),
    },
    {
        path: 'statistics',
        loadComponent: () => import('./statistics/statistics.component').then(c => c.StatisticsComponent),
    },
    {
        path: 'coupens',
        loadComponent: () => import('./coupens/coupens.component').then(c => c.CoupensComponent),
    }
];
