import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphListComponent } from './morph-list.component';

describe('MorphListComponent', () => {
  let component: MorphListComponent;
  let fixture: ComponentFixture<MorphListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
