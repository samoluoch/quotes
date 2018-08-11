export class Quotes {
  public showQuote: boolean;
  constructor (public id: number, public author: string, public quote: string, public postedBy: string, public dateCreated: Date) {
    this.showQuote = false;
  }
}
