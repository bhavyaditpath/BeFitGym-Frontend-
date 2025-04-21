import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Route, Router, RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { user } from '../userCredentials.model';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabel,
    ButtonModule,
    RouterLink,
    CardModule,
    CommonModule,
    PasswordModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  model = new user('admin@gmail.com', '123456');
  
  constructor(private authServices: AuthService, private router: Router) {}

  login(): boolean {
    if (!this.model.userEmail || !this.model.password) {
      this.model.message = 'Please enter email and password';
      return false;
    }

    const isLoggedIn = this.authServices.login(
      this.model.userEmail,
      this.model.password
    );

    if (isLoggedIn) {
      this.model.message = 'Login successful!';
      this.router.navigate(['/secure']); // Redirect after login
      return true;
    } else {
      this.model.message = 'Invalid credentials. Please try again.';
      return false;
    }
  }
}
