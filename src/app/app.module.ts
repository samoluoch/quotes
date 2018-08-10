import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteStatementComponent } from './quote-statement/quote-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteStatementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
