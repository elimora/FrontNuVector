import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [DashboardComponent, ProjectsComponent],
  imports: [CommonModule, DashboardRoutingModule, MatSidenavModule],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
