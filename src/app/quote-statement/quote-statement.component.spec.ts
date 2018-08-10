import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteStatementComponent } from './quote-statement.component';

describe('QuoteStatementComponent', () => {
  let component: QuoteStatementComponent;
  let fixture: ComponentFixture<QuoteStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
