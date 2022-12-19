import { Component, OnInit } from '@angular/core';

// Services
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-netflix';

  // Params
  api_key:string = "c6ddb2547d3e67a073e9212d12070041";

  movies:any;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.showApi();
  }

  showApi(){
    this.http.httpGet(this.api_key).subscribe(data => {
      console.log(data);

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

