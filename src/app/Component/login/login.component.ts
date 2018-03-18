import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';
import { Form,FormControl,FormGroup,FormBuilder,FormArray, Validators } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
  
    }
 url:string;
  loginForm:FormGroup;
  //email = new FormControl("");
  //password = new FormControl("");
  error:string='';
  loading:boolean;

  constructor(
      private formBuilder:FormBuilder,
      private userAuthanticaationService:AuthenticationService,
      private router:Router) { 
    
    this.loginForm = this.formBuilder.group({

        email:new FormControl(),
        password:new FormControl()

    });

  }

  login(){


        // this.email=this.loginForm.get('email').value() as string;
        // this.password=this.loginForm.get('password').value() as string;

       // console.log(this.loginForm.get("email").value);

        this.userAuthanticaationService.login(this.loginForm.get("email").value,this.loginForm.get("password").value)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['']);
                } else {
                    this.error = 'Email or password is incorrect';
                    this.loading = false;
                }
            });
    
  }

}