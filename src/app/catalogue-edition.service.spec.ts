import { TestBed } from '@angular/core/testing';

import { CatalogueEditionService } from './catalogue-edition.service';

describe('CatalogueEditionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogueEditionService = TestBed.get(CatalogueEditionService);
    expect(service).toBeTruthy();
  });
});
