import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LoginFromComponent } from './views/login-view/login-from/login-from.component';
import { SignupFromComponent } from './views/login-view/signup-from/signup-from.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LoginFromComponent,
    SignupFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
