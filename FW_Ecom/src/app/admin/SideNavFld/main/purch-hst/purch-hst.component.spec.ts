import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchHstComponent } from './purch-hst.component';

describe('PurchHstComponent', () => {
  let component: PurchHstComponent;
  let fixture: ComponentFixture<PurchHstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchHstComponent]
    });
    fixture = TestBed.createComponent(PurchHstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
