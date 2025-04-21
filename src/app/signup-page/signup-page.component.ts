import { Component, NgModule } from '@angular/core';
import { AuthService } from '../auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { user } from '../userCredentials.model';
import { ForgetpasswordComponent } from "../forgetpassword/forgetpassword.component";

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule, InputTextModule, FloatLabel, ButtonModule, RouterLink, CommonModule,PasswordModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  user : user[] = [];
  model = new user();

  constructor(private authServices: AuthService, private router: Router) { }

  signup(): boolean {
    // console.log(this);
  
    if (this.authServices.signup(this.model.userEmail, this.model.password)) {
      this.model.message = "Your signup is successful";
      this.router.navigate(['/login']);
      return true;
    }
  
    this.model.message = "User already exists!";
    return false;
  }

}
