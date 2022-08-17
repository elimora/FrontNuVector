import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { Project } from 'src/app/models/project.models';
import { ClientService } from 'src/app/services/client.service';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  currentUser: firebase.User | null = null;
  projects: Project[] = [];
  tasks: Task[] = [];
  clients: Client[] = [];

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private projectServices: ProjectService,
    private taskService: TaskService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => (this.currentUser = user));
    this.projectServices.getProjects().subscribe({
      next: (res) => (this.projects = res),
      error: (err) => console.error(err),
    });

    this.taskService.getTasks().subscribe({
      next: (res) => (this.tasks = res),
      error: (err) => console.log(err),
    });

    this.clientService.getClients().subscribe({
      next: (res) => (this.clients = res),
      error: (err) => console.log(err),
    });
  }

  logOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}
