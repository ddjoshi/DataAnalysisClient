/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/index';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    headers: Headers;
    options: RequestOptions;
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { 
          
        }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login('peter@klaven','cityslicka')
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}*/
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';
import { Form,FormControl,FormGroup,FormBuilder,FormArray } from "@angular/forms";
//import { UserServiceService } from "../../_services/user-service.service";

import { AppRoutingModule } from "../../app-routing.module";
import { Router } from '@angular/router';
//import { Route } from '@angular/compiler/src/core';
import { AuthenticationService } from '../../_services/index';
//import { error } from 'util';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }
    
   @Input() user:User;
  url:string;
  loginForm:FormGroup;
  error:'';

  constructor(
      private fb:FormBuilder,
      private us1:AuthenticationService,
      private router:Router) { 
    
    this.loginForm = this.fb.group({

      email:'',
      password:''

    });

  }

  login(){

  
        //this.us1.login('peter@klaven','cityslicka')
        this.us1.login('peter@klaven','cityslicka')
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['']);
                } //else {
                    //this.error = 'Email or password is incorrect';
                    //this.loading = false;
                //}
            });
    
  }

  /*prepareSaveUser1():currentUser
  {
    const formModel = this.loginForm.value;

    const saveUser:User = {

      //fname:this.siForm.get('fname').value as string,
      //lname:this.signUpForm.get('lname').value as string,
      email:this.loginForm.get('email').value as string,
      password:this.loginForm.get('password').value as string

    }
    return saveUser;
  }*/
  

}
