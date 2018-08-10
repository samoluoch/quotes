import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes (1, 'Author1', 'This is a quote.'),
    new Quotes (1, 'Author2', 'This is yet another quote'),
  ];

  toggleDetails(index){
    this.quotes[index].showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
