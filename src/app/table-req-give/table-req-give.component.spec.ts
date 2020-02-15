import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReqGiveComponent } from './table-req-give.component';

describe('TableReqGiveComponent', () => {
  let component: TableReqGiveComponent;
  let fixture: ComponentFixture<TableReqGiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReqGiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReqGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
