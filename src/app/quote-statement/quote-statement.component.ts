import { Component, OnInit, Input } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote-statement',
  templateUrl: './quote-statement.component.html',
  styleUrls: ['./quote-statement.component.css']
})
export class QuoteStatementComponent implements OnInit {

  @Input() quote: Quotes;
  constructor() { }

  ngOnInit() {
  }

}
