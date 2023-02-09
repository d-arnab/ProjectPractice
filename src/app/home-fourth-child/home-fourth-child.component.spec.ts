import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFourthChildComponent } from './home-fourth-child.component';

describe('HomeFourthChildComponent', () => {
  let component: HomeFourthChildComponent;
  let fixture: ComponentFixture<HomeFourthChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFourthChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFourthChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
