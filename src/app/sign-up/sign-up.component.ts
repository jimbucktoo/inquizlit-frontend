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

  model = new NewUser()

  // submitted = false;

  onSubmit() {
  }

  constructor(private service: AddNewUserService) { }

  ngOnInit() {
  }

  newUser() {
      this.service.postUser(this.model);
  }
}