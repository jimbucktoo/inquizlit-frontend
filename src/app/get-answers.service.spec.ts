import { TestBed } from '@angular/core/testing';

import { GetAnswersService } from './get-answers.service';

describe('GetAnswersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAnswersService = TestBed.get(GetAnswersService);
    expect(service).toBeTruthy();
  });
});
