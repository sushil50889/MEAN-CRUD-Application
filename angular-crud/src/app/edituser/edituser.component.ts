import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import {AuthService} from '../services/auth.service';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
  animations: [ fadeIn ]
})
export class EdituserComponent implements OnInit {
  editUserForm: FormGroup;
  name: FormControl;
  email: FormControl;
  dob: FormControl;
  phone: FormControl;
  city: FormControl;
  
  // userValue:any = null;  
  updatedValue:any = null;  
  id: String;

  constructor(
    private auth: AuthService, 
    private flashMsg: FlashMessagesService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.id = this.route.snapshot.params['id'];
    this.showeditform(this.id); 
    this.createFormControls();
    this.createFormGroup();    
  }



  showeditform(id)
  {
    this.auth.editUser(id).subscribe((foundUser:any) => {    
      if(foundUser.success){
        // console.log(foundUser.data);
        // this.userValue =  foundUser.data;
        // console.log(this.userValue);
        // return this.name1;
        this.editUserForm.setValue({
          name: foundUser.data.name,
          email: foundUser.data.email,
          dob: foundUser.data.dob,
          phone: foundUser.data.phone,
          city: foundUser.data.city
        })

      }else{
        this.flashMsg.show("Error: "+ foundUser.msg, {cssClass: 'flashMessageBox', timeout: 5000});  
        this.router.navigate(['/userList']);
      } 
      
      
    });    
  }


  updateUser(id)
  {
    this.genOnlyNum(event);    
    const user = this.editUserForm.value;
    // console.log(user);
    // console.log(id);

    this.auth.updateUserService(id, user).subscribe((data:any) => {
      if(data.success){
        this.flashMsg.show("SUCCESS !  "+ data.msg, {cssClass: 'flashMessageBox', timeout: 6000});
        this.router.navigate(['/userList']);
      }else{
        this.flashMsg.show("ERROR !  "+ data.msg, {cssClass: 'flashMessageBox', timeout: 6000});
        this.router.navigate(['/userList']);
      }
    });
  }



  createFormControls() 
  { 
    this.name = new FormControl('', [
      Validators.required, 
      Validators.minLength(5), Validators.maxLength(60)
    ]);    
    this.email = new FormControl('', [
      Validators.required, 
      Validators.email
    ]);
    this.dob = new FormControl('', [
    Validators.required, Validators.minLength(7)
    ]);
    this.phone = new FormControl('', [
      Validators.required, 
      Validators.minLength(10), Validators.maxLength(15)
    ]);
    this.city = new FormControl('', [
      Validators.required, 
      Validators.minLength(2), Validators.maxLength(40)
    ]);
  }



  createFormGroup() 
  { 
    this.editUserForm = new FormGroup({
      name: this.name,
      email: this.email,
      dob: this.dob,
      phone: this.phone,
      city: this.city,
    });
  }



  genOnlyNum(event)
  { 
    if(event.target.value == ''){
      
    }else{
      let num = this.auth.extractNumFromStr(this.editUserForm.value.phone);
      // console.log("input val : "+ this.addUserForm.value.phone);
      // console.log("output val : "+ num);
      this.editUserForm.value.phone = num;
      event.target.value = num;
    }
    
  }




}
