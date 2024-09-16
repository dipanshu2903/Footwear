import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchOrdComponent } from './purch-ord.component';

describe('PurchOrdComponent', () => {
  let component: PurchOrdComponent;
  let fixture: ComponentFixture<PurchOrdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchOrdComponent]
    });
    fixture = TestBed.createComponent(PurchOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
