import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { RgisterComponent } from './rgister/rgister.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { Home2Component } from './home2/home2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpcheckComponent } from './otpcheck/otpcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    RgisterComponent,
    HomeComponent,
    FriendsComponent,
    Home2Component,
    OtpcheckComponent
  ],
  imports: [
    BrowserModule,
  ReactiveFormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
