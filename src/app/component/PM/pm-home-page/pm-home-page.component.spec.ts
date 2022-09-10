import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmHomePageComponent } from './pm-home-page.component';

describe('PmHomePageComponent', () => {
  let component: PmHomePageComponent;
  let fixture: ComponentFixture<PmHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
