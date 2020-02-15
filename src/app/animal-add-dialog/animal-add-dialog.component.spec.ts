import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAddDialogComponent } from './animal-add-dialog.component';

describe('AnimalAddDialogComponent', () => {
  let component: AnimalAddDialogComponent;
  let fixture: ComponentFixture<AnimalAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
