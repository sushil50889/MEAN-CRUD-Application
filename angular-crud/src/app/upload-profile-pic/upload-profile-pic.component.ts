import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SyncAsync } from '@angular/compiler/src/util';

@Component({
  selector: 'app-upload-profile-pic',
  templateUrl: './upload-profile-pic.component.html',
  styleUrls: ['./upload-profile-pic.component.css']
})
export class UploadProfilePicComponent implements OnInit {

  fileName:any;
  file:File;
  ext: String;
  id:String;
  imageUpload:FormGroup;
  uploadedProfilePic:FormControl; 
  progressBarValue: any;

  constructor(    
    private auth: AuthService, 
    private flashMsg: FlashMessagesService, 
    private router: Router,
    private route: ActivatedRoute   
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];   
    this.progressBarValue = 0; 
  }
  

  onFileSelected(e)  
  {
    // console.log(e);
    this.fileName = e.target.files[0].name;
    this.ext = this.auth.getExtension(e.target.files[0].type);
    this.file = <File>e.target.files[0];

    // console.log(e.target.files[0].type);    
    // console.log(this.ext);    
  }


  reset()
  {
    // window.location.reload();
    this.router.navigate(['/userList']);
  }


  onUpload(e)  
  {
    // console.log(e);

    const uploadData = new FormData();
    uploadData.append("uploadedProfilePic", this.file);

    this.auth.uploadProfilePic(this.id, uploadData).subscribe((data:any) => {
     
      if(data.type == 1){
        // console.log(Math.round(data.loaded*100/data.total));
        this.progressBarValue = Math.round(data.loaded*100/data.total);
        // console.log("not routing");
      }

    // setTimeout(()=>{ 
      if(data.type == 4){
        // console.log(data);
      var updateData = {avatar: "uploadedProfilePic"+this.id+'.'+this.ext};

      if(data.body.success) {
        this.auth.updateUserService(this.id, updateData).subscribe((data:any)=> {
          // console.log(data);
          if(data.success){
            this.flashMsg.show("Success: "+ data.msg, {cssClass: 'flashMessageBox', timeout: 6000});
            
            
            this.router.navigate(['/userList']);
          }else{
            this.flashMsg.show("Error: "+ data.msg, {cssClass: 'flashMessageBox', timeout: 6000});
            // this.reset();
            this.router.navigate(['/userList']);
          }
        });
        
      }else {
        this.flashMsg.show("Error: "+ data.body.msg, {cssClass: 'flashMessageBox', timeout: 6000});
        // this.reset();
        this.router.navigate(['/userList']);
        }
      }
    // }, 2000);

    });

    
  }
  



}
