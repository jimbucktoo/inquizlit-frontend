import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  constructor(private http:HttpClient) { }

    postQuestion(newQuestion: any){
      fetch("http://localhost:3001/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(newQuestion)
      })
      .then(response => (response.json()))
      .then(response => console.log(response))
    }
  }

    // postQuestion(newQuestion: any){
    //     return this.http.post("https://localhost:3001/questions", newQuestion);
// }
      
