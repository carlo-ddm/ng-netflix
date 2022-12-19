import { Injectable } from '@angular/core';

// Intrfaces
import { PaginatedShow } from '../interfaces/show';

// HTTP CLIENT
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  movie_endopoint:string = 'https://api.themoviedb.org/3/trending/all/day?';

  constructor(private http: HttpClient) { }


  httpGet(api_key: string):Observable<PaginatedShow>{
    let params = new HttpParams();
    params = params.set('api_key', api_key);
    return this.http.get<PaginatedShow>(this.movie_endopoint, {params})
  }
}
