import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddFundraisingComponent } from './user-add-fundraising.component';

describe('UserAddFundraisingComponent', () => {
  let component: UserAddFundraisingComponent;
  let fixture: ComponentFixture<UserAddFundraisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddFundraisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddFundraisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
