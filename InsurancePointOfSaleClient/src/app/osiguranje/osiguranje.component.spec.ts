import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiguranjeComponent } from './osiguranje.component';

describe('OsiguranjeComponent', () => {
  let component: OsiguranjeComponent;
  let fixture: ComponentFixture<OsiguranjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsiguranjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsiguranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
