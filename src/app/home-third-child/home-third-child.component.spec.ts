import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThirdChildComponent } from './home-third-child.component';

describe('HomeThirdChildComponent', () => {
  let component: HomeThirdChildComponent;
  let fixture: ComponentFixture<HomeThirdChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeThirdChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThirdChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
