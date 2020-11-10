import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BioComponent } from './page/bio/bio.component';
import { OpportunitiesComponent } from './page/opportunities/opportunities.component';


@NgModule({
  declarations: [DashboardComponent, BioComponent, OpportunitiesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
