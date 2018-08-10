export class Quotes {
  public showQuote: boolean;
  constructor (public id: number, public author: string, public quote: string) {
    this.showQuote = false;
  }
}
