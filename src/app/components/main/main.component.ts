import { Component, OnInit } from '@angular/core';

// Services
import { HttpService } from 'src/app/services/http.service';

// Intefaces
import { PaginatedShow, Show } from 'src/app/interfaces/show';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'ng-netflix';

  // Params
  api_key:string = "c6ddb2547d3e67a073e9212d12070041";

  movies:Show[] = [];

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.showApi();
  }

  showApi(){
    this.http.httpGet(this.api_key).subscribe({

      next:(data:PaginatedShow) => {
        console.log(data.results);
        this.movies = data.results
      }
    })
  }
}

// EX CALL
// getResponse(){

//   this.httpService.getPaginateApi(2, 10).subscribe({

//     next:(data:Beers[])=>{
//     console.log(data);
//     this.beers = data
//     // console.log('BIRRE__>>',this.beers);
//   },

//   complete:()=>{
//     console.log('coplete');
//   },

//   error:()=>{
//     console.log('error');
//   }

// });
// }
// }

