import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {

  opportunities: any;
  defaultID = 'jr7pZmdy';

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getJobDetails(this.defaultID);
    this.opportunities = null;
  }

  getJobDetails(id: string): any {
    this.defaultID = id;

    console.log(this.defaultID);

    if (this.defaultID) {
      this.apiService.getOpportunities(this.defaultID).subscribe(data => {
        this.opportunities = data.opportunities.filter(opps => Array.isArray(opps.data));
      }, error => {
        console.log(error);
        this.opportunities = error.error;
      });
    }
  }

}
