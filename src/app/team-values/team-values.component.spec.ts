import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamValuesComponent } from './team-values.component';

describe('TeamValuesComponent', () => {
  let component: TeamValuesComponent;
  let fixture: ComponentFixture<TeamValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
