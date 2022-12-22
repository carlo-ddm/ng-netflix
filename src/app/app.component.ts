import { Component, OnInit } from '@angular/core';

// Services
import { HttpService } from 'src/app/services/http.service';

// Intefaces
import { PaginatedShow, Show } from 'src/app/interfaces/show';
import { Obj, Genres } from './interfaces/genres';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpService){}

  title = 'ng-netflix';
  // Params
  api_key:string = 'c6ddb2547d3e67a073e9212d12070041';
  language:string = 'it-IT'

  cycles:number = 5;
  page:number = 1;

  shows:Show[] = [];
  genres:Genres[] = [];



  ngOnInit(): void {
    this.showApi();
    this.getGenres();
  }

  getGenres(){
    this.http.httpGetGenres(this.api_key, this.language).subscribe({

      next:(data:Obj) => {
        console.log('-----> ',data);
      },

      complete: ()=>{
        console.log('complete');
      },

      error: ()=>{
        console.log('error');
      },
    })
  }

  showApi(){

    for (let cy = 1; cy <= this.cycles; cy++) {
      this.http.httpGet(this.api_key, cy).subscribe({

        next:(data:PaginatedShow) => {
          console.log(data.results);
          // Spread Operator..
          this.shows =  [...this.shows, ... data.results];
        },

        complete: ()=>{
          console.log('complete');
        },

        error: ()=>{
          console.log('error');
        },

      })
    }
  }
}




