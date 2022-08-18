import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  selectedTitle: string = '';
  open = true;

  constructor(
    private readonly afAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  logOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}
