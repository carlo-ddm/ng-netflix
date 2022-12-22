import { Injectable } from '@angular/core';

// Intrfaces
import { PaginatedShow } from '../interfaces/show';
import { Obj } from '../interfaces/genres';

// HTTP CLIENT
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  movie_endopoint:string = 'https://api.themoviedb.org/3/trending/all/day?';
  genres_endpoint:string = 'https://api.themoviedb.org/3/genre/movie/list?'

  constructor(private http: HttpClient) { }

  httpGetGenres(api_key: string, language: string):Observable<Obj>{
    let params = new HttpParams();
    params = params.set('api_key', api_key);
    params = params.set('language', language);
    return this.http.get<Obj>(this.genres_endpoint, {params})

  }

  httpGet(api_key: string, page:number):Observable<PaginatedShow>{
    let params = new HttpParams();
    params = params.set('api_key', api_key);
    params = params.set ('page', page)
    return this.http.get<PaginatedShow>(this.movie_endopoint, {params})
  }
}
