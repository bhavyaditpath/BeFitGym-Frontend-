import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { NavbarComponent } from "./navbar/navbar.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Be-Fit-Gym';
}
