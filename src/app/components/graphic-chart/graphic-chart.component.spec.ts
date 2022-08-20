import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicChartComponent } from './graphic-chart.component';

describe('GraphicChartComponent', () => {
  let component: GraphicChartComponent;
  let fixture: ComponentFixture<GraphicChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
