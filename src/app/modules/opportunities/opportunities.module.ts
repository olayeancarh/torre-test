import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesComponent } from './page/opportunities/opportunities.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [OpportunitiesComponent],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    SharedModule
  ]
})
export class OpportunitiesModule { }
