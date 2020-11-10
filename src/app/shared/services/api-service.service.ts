import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  apiGet(url: string, params?: object): any {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(k => {
      httpParams = httpParams.set(k, params[k]);
    });
    const httpOptions = {
      params: httpParams
    };
    return this.http.get<any>(url, httpOptions);
  }


  apiPost(url: string, data: any): any {
    return this.http.post<any>(url, data);
  }

  getUserBio(username: string): any {
    return this.apiGet(`https://torre.bio/api/bios/${username}`, {});
  }

  getOpportunities(id: any): any {
    return this.apiGet(`https://torre.co/api/opportunities/${id}`, {});
  }
}
