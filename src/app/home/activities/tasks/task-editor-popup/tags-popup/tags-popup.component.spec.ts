import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsPopupComponent } from './tags-popup.component';

describe('TagsPopupComponent', () => {
  let component: TagsPopupComponent;
  let fixture: ComponentFixture<TagsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
