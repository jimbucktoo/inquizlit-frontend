import { Component, OnInit } from '@angular/core';
import { NewUser } from '../new-user';
import { AddNewUserService } from '../add-user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

    form: any;
    model = new NewUser();

    onSubmit() {
    };

    constructor(private service: AddNewUserService, private router: Router) { }

    ngOnInit() {
    };

    newUser() {
        this.service.postUser(this.model);
        this.router.navigateByUrl('/dashboard');
    };

    cancel() {
        this.router.navigateByUrl('');
    };

}
