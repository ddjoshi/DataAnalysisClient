import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from "../../_services/user.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    onSubmitNew()
    {}

    ngOnInit() {
     
  }

}
