import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
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
     
      //console.log("Header Calle constructor");
    }
  ngOnInit() { 
 
 
  }
  
  onLogout()
  {
    console.log("Logout Presssed");
    this.userAuthanticaationService.logout();
  }
  onCheck()
  {
      if (localStorage.getItem('currentUser')) {
          
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.user = currentUser.email;
        
          return true;
      }
      
      return false;
    
  }
}
