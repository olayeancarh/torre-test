import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  apiGet(url: string, params?: object) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(k => {
      httpParams = httpParams.set(k, params[k]);
    });
    const httpOptions = {
      params: httpParams
    };
    return this.http.get<any>(url, httpOptions);
  }

  // tslint:disable-next-line: typedef
  apiPost(url: string, data: any) {
    return this.http.post<any>(url, data);
  }

  // tslint:disable-next-line: typedef
  getUserBio(username: string) {
    return this.apiGet(`https://torre.bio/api/bios/${username}`);
  }

  // tslint:disable-next-line: typedef
  getOpportunities(id: any) {
    return this.apiGet(`https://torre.co/api/opportunities/${id}`);
  }
}
