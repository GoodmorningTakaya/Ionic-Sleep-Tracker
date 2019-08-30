import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedDataPage } from './logged-data.page';

describe('LoggedDataPage', () => {
  let component: LoggedDataPage;
  let fixture: ComponentFixture<LoggedDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
