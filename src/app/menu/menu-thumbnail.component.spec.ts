import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuThumbnailComponent } from './menu-thumbnail.component';

describe('MenuThumbnailComponent', () => {
  let component: MenuThumbnailComponent;
  let fixture: ComponentFixture<MenuThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
