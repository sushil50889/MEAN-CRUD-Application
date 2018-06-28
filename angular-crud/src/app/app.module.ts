import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { NgxPaginationModule } from 'ngx-pagination';


import {AuthService} from './services/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { UploadProfilePicComponent } from './upload-profile-pic/upload-profile-pic.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'addUser', component: AdduserComponent},
  {path:'userList', component: UserlistComponent},
  {path:'editUser/:id', component: EdituserComponent},
  {path:'uploadProfilePic/:id', component: UploadProfilePicComponent},
  {path:'**', component: NotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    AdduserComponent,
    UserlistComponent,
    EdituserComponent,
    ConfirmDialogComponent,
    UploadProfilePicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FileUploadModule,
    NgxPaginationModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
