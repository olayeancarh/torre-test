import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { JobComponent } from './page/job/job.component';
import { PeopleComponent } from './page/people/people.component';


@NgModule({
  declarations: [JobComponent, PeopleComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
