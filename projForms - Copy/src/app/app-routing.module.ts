import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

const routes: Routes = [
  {path: 'reg-form', component: RegFormComponent},
  {path: 'loginform', component: LoginformComponent},
  {path: 'change-pass', component: ChangePassComponent},
  {path: 'forgot-pass', component: ForgotPassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
