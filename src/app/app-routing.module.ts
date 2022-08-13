import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'recover-password', component: UserRegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
