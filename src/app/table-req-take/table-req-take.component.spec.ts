import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReqTakeComponent } from './table-req-take.component';

describe('TableReqTakeComponent', () => {
  let component: TableReqTakeComponent;
  let fixture: ComponentFixture<TableReqTakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReqTakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReqTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
