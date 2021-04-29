import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetizedComponent } from './monetized.component';

describe('MonetizedComponent', () => {
  let component: MonetizedComponent;
  let fixture: ComponentFixture<MonetizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonetizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonetizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
