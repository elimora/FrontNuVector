import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashInsideComponent } from './components/dash-inside/dash-inside.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dash-inside', component: DashInsideComponent },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
