import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from'@angular/fire';
import { AngularFirestoreModule } from'@angular/fire/firestore';
import  {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {DbfirestoreService} from './dbfirestore.service';

@NgModule({
  
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [DbfirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
