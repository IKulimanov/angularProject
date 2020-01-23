import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavFrameComponent } from './nav-frame/nav-frame.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoggedComponent } from './logged/logged.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RestService } from './services/rest.service';
import {HttpClientModule} from '@angular/common/http';
import {FormControlsModule} from './core/form-controls/form-controls.module';
import { FormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AnimalsComponent } from './animals/animals.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    NavFrameComponent,
    LoggedComponent,
    HomeComponent,
    RegComponent,
    ContactsComponent,
    VolunteerComponent,
    AnimalsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormControlsModule,
    FormsModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
