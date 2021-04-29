import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingMonetizationComponent } from './loading-monetization.component';

describe('LoadingMonetizationComponent', () => {
  let component: LoadingMonetizationComponent;
  let fixture: ComponentFixture<LoadingMonetizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingMonetizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingMonetizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
