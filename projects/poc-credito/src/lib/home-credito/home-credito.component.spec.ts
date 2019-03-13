import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCreditoComponent } from './home-credito.component';

describe('HomeCreditoComponent', () => {
  let component: HomeCreditoComponent;
  let fixture: ComponentFixture<HomeCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
