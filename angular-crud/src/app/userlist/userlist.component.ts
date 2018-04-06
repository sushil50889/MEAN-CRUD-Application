import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FlashMessagesService } from 'angular2-flash-messages';

import {AuthService} from '../services/auth.service';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { listAnimation } from '../animations';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  animations: [
    listAnimation
  ]
})
export class UserlistComponent implements OnInit {

  usersList;
  photoBaseUrl:String;

  constructor(
    private auth: AuthService,
    private flashMsg: FlashMessagesService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers();
    this.photoBaseUrl = '../assets/images';    
  }


getUsers()
{
  this.auth.getUsersList().subscribe((data:any) => {
    if(data.success){
      // this.usersList.push(data.users);
      this.usersList = data.users;
      console.log(this.usersList);
      console.log(this.photoBaseUrl);
      // console.log(this.usersList.length);      
    }
  })
}


deleteUser(id)
{
  this.auth.delUser(id).subscribe((data:any) => {
    if(data.success){
      this.flashMsg.show("Success: "+ data.msg, {cssClass: 'alert alert-success text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000});
      
      this.getUsers();
    }else{
      this.flashMsg.show("Error: "+ data.msg, {cssClass: 'alert alert-danger text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000});
    }

    this.router.navigate(['/userList']);
  });
}


openConfDialog(id)
{
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '500px',
    data: ''
  });

  dialogRef.afterClosed().subscribe( result => {
    // console.log (result);
    if (result) {
      this.deleteUser(id);
    } else {
      this.router.navigate(['/userList']);
    }    
  });
}


}
