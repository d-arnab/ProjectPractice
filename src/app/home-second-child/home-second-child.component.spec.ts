import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecondChildComponent } from './home-second-child.component';

describe('HomeSecondChildComponent', () => {
  let component: HomeSecondChildComponent;
  let fixture: ComponentFixture<HomeSecondChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSecondChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSecondChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
