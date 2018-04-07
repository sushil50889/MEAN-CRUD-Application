import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  user: any;
  userData: any;

  constructor(
    private http: HttpClient
  ) { }


//add user service
  registerUser(user)
  {
    let header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/add', user, {headers: header}).map(res => {return res});
  }
  


//get user list service
  getUsersList()
  {
    let header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/userslist', {headers: header}).map(res => {return res});
  }



//delete user service
  delUser(id)
  {
    let header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.http.delete('http://localhost:3000/users/delete/'+id+'?_method=DELETE', {headers: header}).map(res => {return res});
  }



//edit user service
  editUser(id)
  {
    let header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/edit/'+id, {headers: header}).map(res => {return res});
  }



//update user service
  updateUserService(id, user)
  {
    let header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/users/update/'+id+'?_method=PUT', user, {headers: header}).map(res => {return res});
  }



//String to number
  extractNumFromStr(str)
  {
    var  num = str.replace( /[^\d.]/g, '' );   
    return num;
  }



//upload Picture service
  uploadProfilePic(id, file)
  {
    const req = new HttpRequest(
      'POST', 
      'http://localhost:3000/users/uploadPic/'+id, file, {
      reportProgress: true
    });
  
    return this.http.request(req).map(res => {return res});
  }



//get extension from image type  
  getExtension(type)
  {
    var ext = type.substring(type.lastIndexOf('/')+1, type.length);
    if(ext == 'jpeg'){
      ext = 'jpg';
    }

    return ext;
  }
  


}


