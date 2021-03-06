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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegComponent,CustomSnackBarComponent } from './reg/reg.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AnimalsComponent } from './animals/animals.component';
import { ProfileComponent } from './profile/profile.component';
import { MatFormFieldModule} from '@angular/material';
import { MatStepperModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatSnackBarModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { AnimalDialogReqComponent } from './animal-dialog-req/animal-dialog-req.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { MatTableModule} from '@angular/material';
import { TableUserComponent } from './table-user/table-user.component';
import { TablePetComponent } from './table-pet/table-pet.component';
import { AnimalAddDialogComponent } from './animal-add-dialog/animal-add-dialog.component';
import { TableReqTakeComponent } from './table-req-take/table-req-take.component';
import { TableReqGiveComponent } from './table-req-give/table-req-give.component';
import { FooterComponent } from './footer/footer.component';
import { PrivetComponent } from './privet/privet.component';
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
    CustomSnackBarComponent,
    AnimalDialogReqComponent,
    AdminProfileComponent,
    TableUserComponent,
    TablePetComponent,
    AnimalAddDialogComponent,
    TableReqTakeComponent,
    TableReqGiveComponent,
    FooterComponent,
    PrivetComponent
  ],
  entryComponents:[CustomSnackBarComponent, AnimalsComponent, AnimalDialogReqComponent, AnimalAddDialogComponent],
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
    FormsModule, 
    MatFormFieldModule, 
    MatStepperModule,
    MatSelectModule, 
    MatSnackBarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
