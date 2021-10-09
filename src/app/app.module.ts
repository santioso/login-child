import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	FontAwesomeModule
  ],
  providers: [  ...environment.providers ],
  bootstrap: [AppComponent]
})
export class AppModule { }
