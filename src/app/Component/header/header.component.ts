import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';
import { AuthGuard } from '../../_guards';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  status:boolean;
  constructor(private userAuthanticaationService:AuthenticationService,
    private router:Router,public authguard:AuthGuard) { 
     
      console.log("Header Called constructor");
    }
  ngOnInit() { 
    
  
  }
  
  onLogout()
  {
    console.log("Logout Presssed");
    this.userAuthanticaationService.logout();
  }

}
