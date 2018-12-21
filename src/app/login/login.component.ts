import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SigninUser } from '../signin-user';
import { AddNewUserService } from '../add-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new SigninUser("", "");

  constructor(private router: Router, private usrv: AddNewUserService) { }

  onSubmit() {
  }
  
  ngOnInit() {
  }

  sendToSignUp(){
    this.router.navigateByUrl('/signup');
  }

  sendToHome(){
    this.router.navigateByUrl('');
    // this.usrv.sendUser(this.model);
  }
}
