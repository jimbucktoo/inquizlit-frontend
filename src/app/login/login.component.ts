import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import { AddNewUserService } from '../add-user.service'
import { AuthService } from '../auth.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(public auth: AuthService, private router: Router, private usrv: AddNewUserService) { }

    ngOnInit() {
    }

}
