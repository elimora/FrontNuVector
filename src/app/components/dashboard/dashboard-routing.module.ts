import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { AddClientComponent } from '../clients/add-client/add-client.component';
import { DashboardComponent } from './dashboard.component';
import { ProjectsTableComponent } from '../projects/projects-table/projects-table.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: ProjectsTableComponent },
      { path: 'add-client', component: AddClientComponent },
      { path: 'add-task', component: AddTaskComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
