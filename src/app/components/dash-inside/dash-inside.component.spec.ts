import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashInsideComponent } from './dash-inside.component';

describe('DashInsideComponent', () => {
  let component: DashInsideComponent;
  let fixture: ComponentFixture<DashInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
