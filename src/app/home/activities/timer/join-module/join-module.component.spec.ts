import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinModuleComponent } from './join-module.component';

describe('JoinModuleComponent', () => {
  let component: JoinModuleComponent;
  let fixture: ComponentFixture<JoinModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
