import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEpicComponent } from './add-epic.component';

describe('AddEpicComponent', () => {
  let component: AddEpicComponent;
  let fixture: ComponentFixture<AddEpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
