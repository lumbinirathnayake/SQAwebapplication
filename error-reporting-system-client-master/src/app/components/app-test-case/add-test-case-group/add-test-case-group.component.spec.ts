import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestCaseGroupComponent } from './add-test-case-group.component';

describe('AddTestCaseGroupComponent', () => {
  let component: AddTestCaseGroupComponent;
  let fixture: ComponentFixture<AddTestCaseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestCaseGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestCaseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
