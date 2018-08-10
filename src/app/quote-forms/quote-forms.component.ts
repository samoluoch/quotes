import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '@angular/compiler';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-quote-forms',
  templateUrl: './quote-forms.component.html',
  styleUrls: ['./quote-forms.component.css']
})
export class QuoteFormsComponent implements OnInit {
  // newQuote = new Quote(0, "", "", new Date());
  // @Output() addQuote = new EventEmitter<Quote>();

  // submitQuote() {
  //   this.addQuote.emit(this.newQuote);
  // }

  ngOnInit() {
  }

}
