import { Component, OnInit, Input } from '@angular/core';

import { Form,FormControl,FormGroup,FormBuilder,FormArray } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { Router,Route } from '@angular/router';
import { ActivatedRoute,Params } from '@angular/router';
import 'rxjs/add/operator/filter';
import { ForgotService } from '../../_services/forgot.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
 
})
export class ResetComponent implements OnInit {

  token:String;
  
  resetForm:FormGroup;
  
  constructor(private route: ActivatedRoute,private service:ForgotService, private formBuilder:FormBuilder) { 
     // this.token=this.route.snapshot.queryParamMap.get("reset");
      console.log("In Reser9++++");
      this.resetForm = this.formBuilder.group({

        
        password:new FormControl()
  
      });
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.token = params['reset'];
      console.log(this.token);
    });
       }

       resetPassword()
       {
         console.log("in reset paassword");
            this.service.setPassword(this.resetForm.get("password").value,this.token);
                    
                    
       }1

  }


