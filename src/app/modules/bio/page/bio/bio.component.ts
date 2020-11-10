import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../../../../shared/services/api-service.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  userDetails: any;
  person: any;
  interests: any;
  opportunities: any;
  defaultUser = 'akejuolayinka016';

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getUserDetails(this.defaultUser);
    this.person = null;
  }

  getUserDetails(user: string): any {
    this.defaultUser = user;

    console.log(this.defaultUser);

    if (this.defaultUser) {
      this.apiService.getUserBio(this.defaultUser).subscribe(data => {
        this.person = data.person;
        this.interests = data.interests;
        this.opportunities = data.opportunities.filter(opps => Array.isArray(opps.data));
        this.userDetails = data;
      }, error => {
        this.userDetails = error.error;
        this.person = null;
      });
    }
  }

}
