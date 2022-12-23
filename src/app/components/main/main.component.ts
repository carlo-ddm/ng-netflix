import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { Show } from 'src/app/interfaces/show';
import { Genres } from 'src/app/interfaces/genres';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  constructor(){}

  // Shows
  @Input() shows!:Show[];
  @Input() genres!:Genres[]




  ngOnInit(): void {
    console.log('trending in \' Main \' ',this.shows);
    console.log('main genres ', this.genres);

  }
}


