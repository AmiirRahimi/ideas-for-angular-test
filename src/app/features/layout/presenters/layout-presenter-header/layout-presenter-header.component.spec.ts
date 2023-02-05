import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPresenterHeaderComponent } from './layout-presenter-header.component';

describe('LayoutPresenterHeaderComponent', () => {
  let component: LayoutPresenterHeaderComponent;
  let fixture: ComponentFixture<LayoutPresenterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPresenterHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPresenterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
