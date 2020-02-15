import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivetComponent } from './privet.component';

describe('PrivetComponent', () => {
  let component: PrivetComponent;
  let fixture: ComponentFixture<PrivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
