import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.models';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataUser: any;
  projects: Project | any = [];
  tasks: Task | any = [];
  clients: Client | any = [];

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private projectServices: ProjectService,
    private taskService: TaskService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.afAuth.currentUser.then((user) => {
      if (user && user.emailVerified) {
        this.dataUser = user;
      } else {
        this.router.navigate(['/login']);
      }
    });
    this.projectServices.getProjects().subscribe(
      (res) => ((this.projects = res), console.log(this.projects)),
      (err) => console.error(err)
    );

    this.taskService.getTasks().subscribe(
      (res) => ((this.tasks = res), console.log(res)),
      (err) => console.log(err)
    );

    this.clientService.getClients().subscribe(
      (res) => ((this.clients = res), console.log(res)),
      (err) => console.log(err)
    );
  }
  logOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
