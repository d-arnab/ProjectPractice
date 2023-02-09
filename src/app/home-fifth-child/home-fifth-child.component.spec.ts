import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFifthChildComponent } from './home-fifth-child.component';

describe('HomeFifthChildComponent', () => {
  let component: HomeFifthChildComponent;
  let fixture: ComponentFixture<HomeFifthChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFifthChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFifthChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
