import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCreditoComponent } from './poc-credito.component';

describe('PocCreditoComponent', () => {
  let component: PocCreditoComponent;
  let fixture: ComponentFixture<PocCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
