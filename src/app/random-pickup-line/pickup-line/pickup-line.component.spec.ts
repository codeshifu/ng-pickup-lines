import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupLineComponent } from './pickup-line.component';

describe('PickupLineComponent', () => {
  let component: PickupLineComponent;
  let fixture: ComponentFixture<PickupLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
