import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';
import { Form,FormControl,FormGroup,FormBuilder,FormArray } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
  
    }
    
  url:string;
  loginForm:FormGroup;
  error='';
  loading:boolean;

  constructor(
      private formBuilder:FormBuilder,
      private userAuthunticaationService:AuthenticationService,
      private router:Router) { 
    
    this.loginForm = this.formBuilder.group({

      email:new FormControl(),
      password:new FormControl()

    });

  }

  login(){

        this.userAuthunticaationService.login(this.loginForm.get("peter@klaven").value,this.loginForm.get("cityslicka").value)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['']);
                } else {
                    console.log('Email or password is incorrect');
                    // this.error = 'Email or password is incorrect';
                    // this.loading = false;
                }
            });
    
  }

}