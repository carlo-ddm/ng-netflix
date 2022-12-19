import { Injectable } from '@angular/core';

// HTTP CLIENT
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  movie_endopoint:string = 'https://api.themoviedb.org/3/trending/all/day?';

  constructor(private http: HttpClient) { }


  httpGet(api_key: string){
    let params = new HttpParams();
    params = params.set('api_key', api_key);
    return this.http.get<any>(this.movie_endopoint, {params})
  }
}
