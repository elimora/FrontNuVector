import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProjectsTableComponent } from '../projects/projects-table/projects-table.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AddClientComponent } from '../clients/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsTableComponent } from '../clients/clients-table/clients-table.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { GraphicChartComponent } from '../graphic-chart/graphic-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsTableComponent,
    AddClientComponent,
    ClientsTableComponent,
    AddTaskComponent,
    GraphicChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    NgChartsModule,
  ],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
