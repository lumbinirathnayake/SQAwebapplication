import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSprintBoardComponent } from './app-sprint-board.component';

describe('AppSprintBoardComponent', () => {
  let component: AppSprintBoardComponent;
  let fixture: ComponentFixture<AppSprintBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSprintBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSprintBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
