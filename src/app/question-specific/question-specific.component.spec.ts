import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSpecificComponent } from './question-specific.component';

describe('QuestionSpecificComponent', () => {
  let component: QuestionSpecificComponent;
  let fixture: ComponentFixture<QuestionSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
