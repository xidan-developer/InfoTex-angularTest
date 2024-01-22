import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { CreateComponent } from './create/create.component';
import {AngularFireModule} from "@angular/fire/compat";
import {SigninComponent} from "./signin/signin.component";
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { DashboardPipe } from './dashboard.pipe';
import {FormsModule} from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    DashboardPipe,
    EditComponent
  ],
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAGya0gOwkmuuWTJpnzjjax05tzh15e6FY",
      authDomain: "angular-infotex.firebaseapp.com",
      projectId: "angular-infotex",
      storageBucket: "angular-infotex.appspot.com",
      messagingSenderId: "835993987829",
      appId: "1:835993987829:web:e892cb00db524d5352f3bc"
    })),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAGya0gOwkmuuWTJpnzjjax05tzh15e6FY",
      authDomain: "angular-infotex.firebaseapp.com",
      projectId: "angular-infotex",
      storageBucket: "angular-infotex.appspot.com",
      messagingSenderId: "835993987829",
      appId: "1:835993987829:web:e892cb00db524d5352f3bc"
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
