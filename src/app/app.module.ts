import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { environment } from 'src/environments/environment';
import { MatListModule } from '@angular/material/list';

//services
import { ProjectService } from './services/project.service';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { DashInsideComponent } from './components/dash-inside/dash-inside.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { TaskTableComponent } from './components/task-table/task-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    EmailVerificationComponent,
    RecoverPasswordComponent,
    SpinnerComponent,

    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    DashInsideComponent,
    AddProjectComponent,
    TaskTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    MatListModule,
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
