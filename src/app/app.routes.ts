import { Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MembersComponent } from './members/members.component';
import { TrainerComponent } from './trainer/trainer.component';

export const routes: Routes = [
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  {
    path: 'secure',
    component: NavbarComponent,
    children: [
      { path: 'member', component: MembersComponent },
      {
        path: 'module',
        loadChildren: () =>
          import('./module/module.module').then((m) => m.ModuleModule),
      },
      { path: 'trainer', component: TrainerComponent },
      { path: '', redirectTo: 'member', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
];
