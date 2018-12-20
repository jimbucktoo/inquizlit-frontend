import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  constructor(private http:HttpClient) { }

    postUser(newUser: any){
      fetch("https://inquizlit-backend.herokuapp.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(newUser)
      })
      .then(response => (response.json()))
      .then(response => console.log(response))
    }
  }