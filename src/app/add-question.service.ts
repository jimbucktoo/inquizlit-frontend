import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AddQuestionService {

    constructor(private http:HttpClient) { }

    postQuestion(newQuestion: any){
        return (
            fetch("https://inquizlit.herokuapp.com/questions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(newQuestion)
            })
            .then(response => (response.json()))
        )};
};
