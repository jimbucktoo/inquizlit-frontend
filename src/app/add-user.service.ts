import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AddNewUserService {

  constructor(private http: HttpClient) { }

  postUser(newUser: any) {
    fetch("https://inquizlit-backend.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newUser)
    })
      .then(response => (response.json()))
  };

  sendUser(user: any) {
    return (
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(user)
      })
        .then(response => (response.json()))
    )
  };

};