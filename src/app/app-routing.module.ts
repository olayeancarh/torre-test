import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
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
