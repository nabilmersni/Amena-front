import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarrComponent } from './topbarr.component';

describe('TopbarrComponent', () => {
  let component: TopbarrComponent;
  let fixture: ComponentFixture<TopbarrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
