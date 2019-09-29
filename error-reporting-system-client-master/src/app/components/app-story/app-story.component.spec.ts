import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStoryComponent } from './app-story.component';

describe('AppStoryComponent', () => {
  let component: AppStoryComponent;
  let fixture: ComponentFixture<AppStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
