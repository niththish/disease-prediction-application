import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuberculosisComponent } from './tuberculosis.component';

describe('TuberculosisComponent', () => {
  let component: TuberculosisComponent;
  let fixture: ComponentFixture<TuberculosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuberculosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuberculosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
