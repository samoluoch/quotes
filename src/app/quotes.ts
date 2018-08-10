export class Quotes {
  public showQuote: boolean;
  constructor (public id: number, public name: string, public quote: string) {
    this.showQuote = false;
  }
}
