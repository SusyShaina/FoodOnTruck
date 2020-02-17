import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { AboutComponent }  from './about/about.component';
import { MenuComponent }  from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent }  from './service/service.component';
import { TeamComponent }  from './team/team.component';
import { ContactComponent }  from './contact/contact.component';
import { AppRoutingModule }  from './app.route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {MatRadioModule} from '@angular/material/radio';

firebase.initializeApp(environment.firebaseConfig)

@NgModule({
  declarations: [ AppComponent, PageNotFoundComponent, AboutComponent, MenuComponent, ServiceComponent, TeamComponent, ContactComponent, HomeComponent, FooterComponent, HeaderComponent],
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, MatTabsModule, BrowserAnimationsModule, MDBBootstrapModule.forRoot(), MatCheckboxModule, MatSlideToggleModule, Ng2TelInputModule, MatRadioModule],
  bootstrap:    [ AppComponent ],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
