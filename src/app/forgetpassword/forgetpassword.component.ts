import { Component, Input, NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { user } from '../userCredentials.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgetpassword',
  imports: [FormsModule, InputTextModule, FloatLabel, ButtonModule, RouterLink,CardModule,CommonModule,CommonModule,Dialog],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {

  constructor(private authServices: AuthService){}

  user : user[] = [];
  model = new user();

  passwordDialog:boolean = false;

  password: string | undefined 

  @Input() item = ''; 

  forgetPassword() {
    if (!this.model.userEmail) {
      console.log("Please enter your email!");
      this.model.message = "Please enter your email!"
      return;
    }
  
    let password = this.authServices.getForgetPassword(this.model.userEmail);
    if (password) {
      this.password = password;
      this.model.message = "Recovered Password:",this.password;
      console.log("Recovered Password:", this.password);
      this.passwordDialog = true;
    } else {
      this.model.message = "Email not found! Please check again.";
      console.log("Email not found! Please check again.");
    }
  }
}
