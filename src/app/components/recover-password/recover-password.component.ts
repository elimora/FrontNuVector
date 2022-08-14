import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorsService } from 'src/app/services/firebase-code-errors.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
})
export class RecoverPasswordComponent implements OnInit {
  recoverUser: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseerror: FirebaseCodeErrorsService
  ) {
    this.recoverUser = fb.group({
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  recover() {
    this.loading = true;
    const email = this.recoverUser.value.email;
    this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.toastr.info(
          'We send you a mail to reset your password',
          'recover password'
        );
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.firebaseerror.codeError(error.code), 'Error');
      });
  }
}
