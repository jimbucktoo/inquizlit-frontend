import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AddNewUserService {

    constructor(private http:HttpClient) { }

    postUser(newUser: any){
        fetch("https://inquizlit-backend.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(newUser)
        })
        .then(response => (response.json()))
    };

    sendUser(User: any){
        fetch("https://inquizlit-backend.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(User)
        })
        .then(response => (response.json()))
    };

};
