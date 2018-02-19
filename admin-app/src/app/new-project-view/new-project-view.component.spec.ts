import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectViewComponent } from './new-project-view.component';

describe('NewProjectViewComponent', () => {
  let component: NewProjectViewComponent;
  let fixture: ComponentFixture<NewProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
