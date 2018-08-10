import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes (1, 'Author1', 'This is a quote.', new Date (2018, 8, 10)),
    new Quotes (1, 'Author2', 'This is yet another quote', new Date(2018, 8, 11)),
  ];

  toggleDetails(index) {
    this.quotes[index].showQuote = !this.showQuote;
  }

  constructor() { }

  ngOnInit() {
  }

}
