import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePetComponent } from './table-pet.component';

describe('TablePetComponent', () => {
  let component: TablePetComponent;
  let fixture: ComponentFixture<TablePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
