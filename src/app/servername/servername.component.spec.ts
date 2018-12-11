import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServernameComponent } from './servername.component';

describe('ServernameComponent', () => {
  let component: ServernameComponent;
  let fixture: ComponentFixture<ServernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
