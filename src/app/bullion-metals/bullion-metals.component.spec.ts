import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullionMetalsComponent } from './bullion-metals.component';

describe('BullionMetalsComponent', () => {
  let component: BullionMetalsComponent;
  let fixture: ComponentFixture<BullionMetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullionMetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullionMetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
