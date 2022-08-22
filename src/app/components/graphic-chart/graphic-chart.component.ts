import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { Project } from 'src/app/models/project.models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-graphic-chart',
  templateUrl: './graphic-chart.component.html',
  styleUrls: ['./graphic-chart.component.css'],
})
export class GraphicChartComponent implements OnInit {
  projects: Project[] = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartsLabels = ['Jan', 'Feb', 'Marc', 'Apr', 'May'];
  public barChartType = 'bar';
  public barChartLegends = true;

  public barChartData = [
    { data: [65, 56, 26, 49, 99, 50], label: 'Hours' },
    { data: [22, 80, 26, 45, 22, 49], label: 'Project' },
  ];
  constructor(private projectServices: ProjectService) {}

  ngOnInit(): void {
    this.projectServices.fetchProjects();
    this.projectServices.getProjects().subscribe({
      next: (res) => ((this.projects = res), console.log(res)),
      error: (err) => console.error(err),
    });
  }
}
