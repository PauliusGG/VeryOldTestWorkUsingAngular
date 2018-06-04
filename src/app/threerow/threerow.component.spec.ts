import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreerowComponent } from './threerow.component';

describe('ThreerowComponent', () => {
  let component: ThreerowComponent;
  let fixture: ComponentFixture<ThreerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
