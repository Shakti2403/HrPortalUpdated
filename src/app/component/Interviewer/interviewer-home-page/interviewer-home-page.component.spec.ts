import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerHomePageComponent } from './interviewer-home-page.component';

describe('InterviewerHomePageComponent', () => {
  let component: InterviewerHomePageComponent;
  let fixture: ComponentFixture<InterviewerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
