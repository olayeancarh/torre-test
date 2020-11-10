import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./modules/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'bio',
        loadChildren: () =>
          import('./modules/bio/bio.module').then(m => m.BioModule)
      },
      {
        path: 'opportunities',
        loadChildren: () =>
          import('./modules/opportunities/opportunities.module').then(m => m.OpportunitiesModule)
      },
    ]
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
