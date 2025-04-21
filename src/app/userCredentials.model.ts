export class user {
  userName: string = '';
  userEmail: string = '';
  password: string = '';
  message: string = '';

  constructor(_userEmail?: string, _password?: string, _message?: string) {
    this.userEmail = _userEmail ?? '';
    this.password = _password ?? '';
    this.message = _message ?? '';
  }
}

export class UserCredential {
  constructor(public userEmail: string = "", public password: string = "") {}
}
