import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerUser: FormGroup;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) {
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
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
