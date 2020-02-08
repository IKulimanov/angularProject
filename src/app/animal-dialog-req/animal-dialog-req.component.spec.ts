import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDialogReqComponent } from './animal-dialog-req.component';

describe('AnimalDialogReqComponent', () => {
  let component: AnimalDialogReqComponent;
  let fixture: ComponentFixture<AnimalDialogReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDialogReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDialogReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
