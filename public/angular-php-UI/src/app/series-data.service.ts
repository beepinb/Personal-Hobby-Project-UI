import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from './series-list/series-list.component';

@Injectable({
  providedIn: 'root'
})
export class SeriesDataService {

  private baseUrl:string="http://localhost:5656/api/";

  constructor(private http:HttpClient) { }

  public getAllSeries():Observable<Series[]>{
    console.log("Inside getSeries Servicedata");
    const url:string=this.baseUrl+"tvseries";
    return this.http.get<Series[]>(url);
  }
  public getSeries(seriesId:string):Observable<Series>{
    const url:string=this.baseUrl+"tvseries/"+seriesId;
    return this.http.get<Series>(url);
  }
}
