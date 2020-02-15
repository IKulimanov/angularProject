import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedComponent} from './logged/logged.component';
import {HomeComponent} from './home/home.component';
import { RegComponent } from './reg/reg.component'
import { ContactsComponent } from './contacts/contacts.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AnimalsComponent } from './animals/animals.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
const routes: Routes = [
  {
    path:'logged',
    component: LoggedComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'registration',
    component: RegComponent
  },
  {
    path:'contacts',
    component: ContactsComponent
  },
  {
    path:'volunteer',
    component: VolunteerComponent
  },
  {
    path:'animals',
    component: AnimalsComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'adminprofile',
    component: AdminProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
