import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes (1, 'Sam', 'This is a quote.'),
    new Quotes (1, 'Oluoch', 'This is yet another quote'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
