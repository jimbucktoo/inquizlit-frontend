import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AddAnswerService {

  constructor(private http:HttpClient) { }

    postAnswer(newAnswer: any){
      fetch("https://inquizlit-backend.herokuapp.com/answers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(newAnswer)
      })
      .then(response => (response.json()))
      .then(response => console.log(response))
    };

  };