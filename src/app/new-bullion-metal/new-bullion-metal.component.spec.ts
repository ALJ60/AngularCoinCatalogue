import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBullionMetalComponent } from './new-bullion-metal.component';

describe('NewBullionMetalComponent', () => {
  let component: NewBullionMetalComponent;
  let fixture: ComponentFixture<NewBullionMetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBullionMetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBullionMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
