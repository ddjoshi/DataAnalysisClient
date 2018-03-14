import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';
import { Form,FormControl,FormGroup,FormBuilder,FormArray } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/index';

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
      private formBuilder:FormBuilder,
      private us1:AuthenticationService,
      private router:Router) { 
    
    this.loginForm = this.formBuilder.group({

      email:'',
      password:''

    });

  }

  login(){

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

}
