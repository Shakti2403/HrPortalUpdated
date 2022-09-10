import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlHomePageComponent } from './tl-home-page.component';

describe('TlHomePageComponent', () => {
  let component: TlHomePageComponent;
  let fixture: ComponentFixture<TlHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
