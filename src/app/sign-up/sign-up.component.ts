import { Component, OnInit } from '@angular/core';
import { NewUser } from '../new-user';
import { AddNewUserService } from '../add-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  form: any;
  model = new NewUser("", "", "", "", "");
  message: any;

  onSubmit() {
  };

  constructor(private service: AddNewUserService) { }

  ngOnInit() {
  };
  // sendToHome() {
  //   this.router.navigateByUrl("");
  //   // this.usrv.sendUser(this.model);
  // };

  newUser() {
    // this.service.postUser(this.model);
    // this.service.postUser(this.model).then(response => {
    //   if (response === "user already exists") {
    //     this.message = response
    //   } else {
    //     console.log(response)
    //     // this.sendToHome();
    //   }
    // })
  };

}