import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service';
import { fadeIn } from '../animations';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  animations: [
    fadeIn
  ]
})

export class AdduserComponent implements OnInit {
  addUserForm: FormGroup;
  name: FormControl;
  email: FormControl;
  dob: FormControl;
  phone: FormControl;
  city: FormControl;

  constructor(
    private auth: AuthService, 
    private flashMsg: FlashMessagesService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
  }

  createFormControls() { 
    this.name = new FormControl('', [
      Validators.required, Validators.minLength(5), Validators.maxLength(60)
    ]);
    this.email = new FormControl('', [
      Validators.required, Validators.email
    ]);
    this.dob = new FormControl('', 
    Validators.required
  );

  // let numPatt = "/^[0-9]*$/g";
    this.phone = new FormControl('', [
      Validators.required, Validators.minLength(10), Validators.maxLength(15)
    ]);
    this.city = new FormControl('', [
      Validators.required, Validators.minLength(2), Validators.maxLength(40)
    ]);
  }

  createFormGroup() { 
    this.addUserForm = new FormGroup({
      name: this.name,
      email: this.email,
      dob: this.dob,
      phone: this.phone,
      city: this.city,
    });
  }



  addUser()
  {
    this.genOnlyNum(event);
    var newUser = this.addUserForm.value;

    // console.log(newUser);

    this.auth.registerUser(newUser).subscribe((data:any) => {
      // console.log(data.success);
      if(data.success){
        this.flashMsg.show("Success: "+ data.msg, {cssClass: 'alert alert-success text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000});

        this.router.navigate(['/userList']);
      }else{
        this.flashMsg.show("Error: "+ data.msg, {cssClass: 'alert alert-danger text-white py-1 px-4 w-50 mx-auto mt-2', timeout: 6000});

        this.router.navigate(['/addUser']);
      }
    });
    // console.log(this.addUserForm);
  }



  genOnlyNum(event)
  { 
    if(event.target.value == ''){
      
    }else{
      let num = this.auth.extractNumFromStr(this.addUserForm.value.phone);
      // console.log("input val : "+ this.addUserForm.value.phone);
      // console.log("output val : "+ num);
      this.addUserForm.value.phone = num;
      event.target.value = num;
    }
    
  }



}
