import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { AddClientComponent } from '../clients/add-client/add-client.component';
import { DashboardComponent } from './dashboard.component';
import { ProjectsTableComponent } from '../projects/projects-table/projects-table.component';
import { AddProjectComponent } from '../projects/add-project/add-project.component';
import { GraphicChartComponent } from '../graphic-chart/graphic-chart.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: AddProjectComponent },
      { path: 'add-client', component: AddClientComponent },
      { path: 'add-task', component: AddTaskComponent },
      { path: 'add-project', component: AddProjectComponent },
      { path: 'app-graphic-chart', component: GraphicChartComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
