import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, Menubar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit() {
    const { userEmail, password } = this._authService.loggedInUser;
    if (!userEmail && !password) {
      this.router.navigate(['/signup']);
    } else {
      this.items = [
        {
          label: 'Member',
          command: () => {
            this.router.navigate(['secure/member']);
          },
        },
        {
          label: 'Trainer',
          command: () => {
            this.router.navigate(['secure/trainer']);
          },
        },
        {
          label: 'Plans',
          command: () => {
            this.router.navigate(['secure/module/subscriptionPlans']);
          },
        },
        // {
        //   label: 'Profile',
        //   icon: 'pi pi-user',
        //   command: () => this.viewProfile(),
        // },
        // {
        //   label: 'Logout',
        //   icon: 'pi pi-sign-out',
        //   command: () => this.logout(),
        // },
      ];
    }
  }

  viewProfile() {}

  logout() {
    this._authService.logout();
    this.router.navigate(['/login']);
  }
}
