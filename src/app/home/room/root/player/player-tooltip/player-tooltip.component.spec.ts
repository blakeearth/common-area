import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTooltipComponent } from './player-tooltip.component';

describe('PlayerTooltipComponent', () => {
  let component: PlayerTooltipComponent;
  let fixture: ComponentFixture<PlayerTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
