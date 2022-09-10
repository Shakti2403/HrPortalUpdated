import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingRequestComponent } from './existing-request.component';

describe('ExistingRequestComponent', () => {
  let component: ExistingRequestComponent;
  let fixture: ComponentFixture<ExistingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
