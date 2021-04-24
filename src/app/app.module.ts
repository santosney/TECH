import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PortfoloyComponent } from './portfoloy/portfoloy.component';
import { NavComponent } from './nav/nav.component';
import {MatCardModule} from '@angular/material/card';
import { TabBordComponent } from './tab-bord/tab-bord.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ChatComponent } from './chat/chat.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {HttpClientModule} from '@angular/common/http';
  
export const firebaseConfig = {
  apiKey: "AIzaSyBwiTHThPmyZueFsGuplKXoGfOijmpgCeI",
  authDomain: "projet01-6d3a6.firebaseapp.com",
  projectId: "projet01-6d3a6",
  storageBucket: "projet01-6d3a6.appspot.com",
  messagingSenderId: "604688995365",
  appId: "1:604688995365:web:e3e85620f99bcd66b0dbcc",
  measurementId: "G-XYJBJWL3ZE"
};

@NgModule({
  declarations: [
    AppComponent,
    PortfoloyComponent,
    NavComponent,
    TabBordComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
