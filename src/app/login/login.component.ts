import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SigninUser } from "../signin-user";
import { AddNewUserService } from "../add-user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  question: any;
  model = new SigninUser("", "");
  message: any;


  constructor(private router: Router, private usrv: AddNewUserService) { }

  onSubmit() {
    console.log("CATS!!!")
    this.usrv.sendUser(this.model).then(response => {
      console.log(response)
      if (response === "User not found") {
        this.message = response;
      } else {
        this.sendToHome();
      }
      //"email": test@test.com
      //password
      //"password": $2a$10$WEum/MKIDZPls7oVC7G/8e7HuIa4o.6RM6hAOXIKWWM2Fy5KF94ny
    })
  };

  ngOnInit() {
  };

  sendToSignUp() {
    this.router.navigateByUrl("/signup");
  };

  sendToHome() {
    this.router.navigateByUrl("");
    // this.usrv.sendUser(this.model);
  };

};
