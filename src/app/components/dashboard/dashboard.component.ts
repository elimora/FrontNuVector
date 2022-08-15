import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataUser: any;
  projects: any = [];

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private projectservices: ProjectService
  ) {}

  ngOnInit(): void {
    this.afAuth.currentUser.then((user) => {
      if (user && user.emailVerified) {
        this.dataUser = user;
      } else {
        this.router.navigate(['/login']);
      }
    });
    this.projectservices.getProjects().subscribe(
      (res) => (this.projects = res),
      (err) => console.error(err)
    );
  }

  logOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
