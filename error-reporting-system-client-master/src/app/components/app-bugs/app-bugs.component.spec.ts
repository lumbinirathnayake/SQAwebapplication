import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBugsComponent } from './app-bugs.component';

describe('AppBugsComponent', () => {
  let component: AppBugsComponent;
  let fixture: ComponentFixture<AppBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
