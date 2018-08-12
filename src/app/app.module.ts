import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteStatementComponent } from './quote-statement/quote-statement.component';
import { QuoteFormsComponent } from './quote-forms/quote-forms.component';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteStatementComponent,
    QuoteFormsComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
