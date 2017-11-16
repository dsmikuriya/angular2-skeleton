import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphViewComponent } from './morph-view.component';

describe('MorphViewComponent', () => {
  let component: MorphViewComponent;
  let fixture: ComponentFixture<MorphViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
