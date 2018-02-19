import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectViewComponent } from './edit-project-view.component';

describe('EditProjectViewComponent', () => {
  let component: EditProjectViewComponent;
  let fixture: ComponentFixture<EditProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
