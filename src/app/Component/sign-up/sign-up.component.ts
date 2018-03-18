import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';
import { Form,FormControl,FormGroup,FormBuilder,FormArray } from "@angular/forms";
import { UserServiceService } from "../../_services/user-service.service";

import { AppRoutingModule } from "../../app-routing.module";
import { Router } from '@angular/router';
//import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Input() user:User;
  url:string;
  signUpForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private us:UserServiceService,private router:Router) { 
    
    this.signUpForm = this.formBuilder.group({

      fname:'',
      lname:'',
      email:'',
      password:''

    });

  }

  onSubmit(){

    this.user=this.prepareSaveUser();
    console.log(this.user);
    this.url = 'http://localhost:8080/user/add' ;
    this.us.postData(this.url,this.user).then((response) => { console.log(response); })
        . catch(error =>console.log(error));
  
    this.router.navigate(['login']);
    
  }

  prepareSaveUser():User
  {
    const formModel = this.signUpForm.value;

    const saveUser:User = {

      fname:this.signUpForm.get('fname').value as string,
      lname:this.signUpForm.get('lname').value as string,
      email:this.signUpForm.get('email').value as string,
      password:this.signUpForm.get('password').value as string

    }
    return saveUser;
  }
  ngOnInit() {
  }

}
