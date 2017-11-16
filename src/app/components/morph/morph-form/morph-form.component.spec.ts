import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphFormComponent } from './morph-form.component';

describe('MorphFormComponent', () => {
  let component: MorphFormComponent;
  let fixture: ComponentFixture<MorphFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
