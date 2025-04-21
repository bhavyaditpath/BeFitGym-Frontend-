import { Injectable } from '@angular/core';
import { UserCredential } from './userCredentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userList: UserCredential[] = [
    new UserCredential("admin@gmail.com", "123456")
  ];


  loggedInUser: UserCredential = new UserCredential();
  signup(userEmail: string, password: string): boolean {
    const existingUser = this.userList.find(user => user.userEmail === userEmail);
    if (existingUser) {
      console.log("User already exists!");
      return false; 
    }
    
    const newUser = new UserCredential(userEmail, password);
    this.userList.push(newUser);
    console.log("User signed up:", newUser);
    return true;
  }

  getForgetPassword(userEmail: string): string | null {
    const user = this.userList.find(user => user.userEmail === userEmail);
    if (user) {
      console.log("Password:", user.password);
      return user.password;
    }
    console.log("User not found!");
    return null;
  }

  login(userEmail: string, password: string): boolean {
    //var isUserExist = this.userList.some(user => user.userEmail === userEmail && user.password === password);
    const existingUser = this.userList.find(user => user.userEmail === userEmail && user.password === password);
    if(existingUser) {
      this.loggedInUser = existingUser;
      return true;
    }
    return false;
  }

    // Logout Function
    logout(): void {
      console.log("User logged out:", this.loggedInUser);
      this.loggedInUser ; 
      // = null
    }

}


