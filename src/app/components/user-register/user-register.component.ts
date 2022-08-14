import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerUser: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.registerUser = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  register() {
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeat_password = this.registerUser.value.repeat_password;

    if (password !== repeat_password) {
      this.toastr.error('passwords do not match', 'Error');
      return;
    }

    if (email === '') {
      this.toastr.error('the email fields must contain information', 'Error');
      return;
    }
    if (password === '' || repeat_password === '') {
      this.toastr.error('password fields must contain information', 'Error');
      return;
    }

    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.toastr.success('Registered user successfully', 'Success');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.fireBaseError(error.code), 'Error');
      });
  }

  fireBaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'The NuVector user alredy exists';

      case 'auth/weak-password':
        return 'the password is very weak';

      case 'auth/invalid-email':
        return 'the email is invalid';

      default:
        return 'unknown error';
        break;
    }
  }
}
