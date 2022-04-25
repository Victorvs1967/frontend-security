import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: environment.signup, component: SignupFormComponent },
  { path: environment.signin, component: SigninFormComponent },
  { path: environment.user, component: UserComponent },
  { path: '', redirectTo: environment.signin, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
