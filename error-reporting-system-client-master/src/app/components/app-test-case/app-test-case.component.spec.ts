import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestCaseComponent } from './app-test-case.component';

describe('AppTestCaseComponent', () => {
  let component: AppTestCaseComponent;
  let fixture: ComponentFixture<AppTestCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTestCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
