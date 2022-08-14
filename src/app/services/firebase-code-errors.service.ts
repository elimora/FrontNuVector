import { Injectable } from '@angular/core';
import { FireBaseCodeEnum } from '../utils/firebase_code_error';

@Injectable({
  providedIn: 'root',
})
export class FirebaseCodeErrorsService {
  constructor() {}

  codeError(code: string) {
    switch (code) {
      case FireBaseCodeEnum.EmailAlreadyInUse:
        return 'The NuVector user alredy exists';

      case FireBaseCodeEnum.weakPassword:
        return 'the password is very weak';

      case FireBaseCodeEnum.InvalidEmail:
        return 'the email is invalid';

      case FireBaseCodeEnum.WrongPassword:
        return 'Incorrect password';

      case FireBaseCodeEnum.UserNotFound:
        return 'user not found';

      default:
        return 'unknown error';
        break;
    }
  }
}
