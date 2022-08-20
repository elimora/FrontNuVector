import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-graphic-chart',
  templateUrl: './graphic-chart.component.html',
  styleUrls: ['./graphic-chart.component.css'],
})
export class GraphicChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartsLabels = ['2006', '2007', '2008', '2009', '2010'];
  public barChartType = 'bar';
  public barChartLegends = true;

  public barChartData = [
    { data: [65, 56, 26, 49, 99, 50], label: 'Serie A' },
    { data: [22, 80, 26, 45, 22, 49], label: 'Serie B' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
