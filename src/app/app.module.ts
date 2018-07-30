import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { ProfileComponent } from './profile/profile.component';
import { PollsComponent } from './polls/polls.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateComponent } from './create/create.component';
import { LikedComponent } from './liked/liked.component';

var firebaseConfig = {
  apiKey: "AIzaSyA-OztHYfnGl9HQSp1lSjjI_jdygMj2eLY",
  authDomain: "polling-e08ab.firebaseapp.com",
  databaseURL: "https://polling-e08ab.firebaseio.com",
  projectId: "polling-e08ab",
  storageBucket: "polling-e08ab.appspot.com",
  messagingSenderId: "557142210644"
};

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PollsComponent,
    SidebarComponent,
    CreateComponent,
    LikedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
