import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBullionMetalComponent } from './edit-bullion-metal.component';

describe('EditBullionMetalComponent', () => {
  let component: EditBullionMetalComponent;
  let fixture: ComponentFixture<EditBullionMetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBullionMetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBullionMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
