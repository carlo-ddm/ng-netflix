import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/interfaces/show';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(){}

  @Input()
  show!: Show;

  ngOnInit(): void {
    console.log('trending in \' Card \' ',this.show);
  }
}
