import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPNComponent } from './rpn.component';

describe('RPNComponent', () => {
  let component: RPNComponent;
  let fixture: ComponentFixture<RPNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
