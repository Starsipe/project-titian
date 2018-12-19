import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialograteComponent } from './dialograte.component';

describe('DialograteComponent', () => {
  let component: DialograteComponent;
  let fixture: ComponentFixture<DialograteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialograteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialograteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
