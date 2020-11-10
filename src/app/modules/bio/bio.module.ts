import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioRoutingModule } from './bio-routing.module';
import { BioComponent } from './page/bio/bio.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [BioComponent],
  imports: [
    CommonModule,
    BioRoutingModule,
    SharedModule
  ]
})
export class BioModule { }
