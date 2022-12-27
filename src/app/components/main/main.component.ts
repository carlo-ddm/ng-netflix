import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { Show } from 'src/app/interfaces/show';
import { Genres } from 'src/app/interfaces/genres';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{

  constructor(){}

  // Inputs
  @Input() shows:Show[] = [];
  @Input() genres:Genres[] = [];

  getAndCompare(genres: Genres): Show[]{
   return  this.shows.filter((show)=>{ return show.genre_ids.includes(genres.id) });
  }


}
