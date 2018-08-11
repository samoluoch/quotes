import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes (1, 'John Thune', 'I believe our flag is more than just cloth and ink. It is a universally recognized symbol that stands for liberty, and freedom. It is the history of our nation, and it is marked by the blood of those who died defending it.','Sam', new Date(2018,8,10)),
    new Quotes (1, 'George Washington', 'Guard against the impostures of pretended patriotism.','Sam' new Date(2018,8,11)),
    new Quotes (1, 'Albert Camus', 'Guard against the impostures of pretended patriotism.', 'Sam', new Date(2018,8,11)),
  ];

  toggleDetails(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  constructor() { }

  ngOnInit() {
  }

}
