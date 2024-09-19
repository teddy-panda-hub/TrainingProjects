import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ChangePassComponent } from './change-pass/change-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    LoginformComponent,
    ForgotPassComponent,
    ChangePassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
