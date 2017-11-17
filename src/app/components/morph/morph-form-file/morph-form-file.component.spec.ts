import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphFormFileComponent } from './morph-form-file.component';

describe('MorphFormFileComponent', () => {
  let component: MorphFormFileComponent;
  let fixture: ComponentFixture<MorphFormFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphFormFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphFormFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
