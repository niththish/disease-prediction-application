import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HepatitsComponent } from './hepatits.component';

describe('HepatitsComponent', () => {
  let component: HepatitsComponent;
  let fixture: ComponentFixture<HepatitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HepatitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HepatitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
