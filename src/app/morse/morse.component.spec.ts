import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseComponent } from './morse.component';

describe('MorseComponent', () => {
  let component: MorseComponent;
  let fixture: ComponentFixture<MorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
