
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';
import { Form,FormControl,FormGroup,FormBuilder,FormArray } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { Router } from '@angular/router';
import { ForgotService } from '../../_services/forgot.service';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  forgotForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private forgotService:ForgotService,
    private router:Router) { 
  
  this.forgotForm = this.formBuilder.group({

    email:new FormControl()

  });

}

  ngOnInit() {
  }

  sendMail()
  {
      console.log("IN sendmail");
      console.log(this.forgotForm.get("email").value);
      this.forgotService.postData(this.forgotForm.get("email").value)
                        .subscribe();
  }

}
