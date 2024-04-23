import { TestBed } from '@angular/core/testing';

import { MovieCategoryService } from './movie-category.service';

describe('MovieCategoryService', () => {
  let service: MovieCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
