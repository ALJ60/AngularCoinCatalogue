import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCatalogueComponent } from './new-catalogue.component';

describe('NewCatalogueComponent', () => {
  let component: NewCatalogueComponent;
  let fixture: ComponentFixture<NewCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
