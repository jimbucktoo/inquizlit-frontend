import { Component, OnInit } from "@angular/core";
import { NewQuestion } from "../new-question";
import { AddQuestionService } from "../add-question.service";
import { AddAnswerService } from "../add-answer.service";
import { NewAnswer } from "../new-answer";

@Component({
    selector: "app-add-question",
    templateUrl: "./add-question.component.html",
    styleUrls: ["./add-question.component.css"]
})

export class AddQuestionComponent implements OnInit {
    form: any;
    tags = ["Select Question Tag", "Culture Fit", "Algorithms", "Computer Science", "Riddles"];
    questions: any;
    model = new NewQuestion();
    modelAnswer= new NewAnswer("", 0, 1, 0, 0);

    onSubmit() {
    };

    constructor(private qsrvpost: AddQuestionService, private asrvpost: AddAnswerService) {}

    ngOnInit() {
       
    };

    newQuestion() {
        this.qsrvpost.postQuestion(this.model)
        .then(response =>{
            return response[0].id
        })  
        .then((response) => {
            this.modelAnswer.question_id = response;
            this.asrvpost.postAnswer(this.modelAnswer);
        });
    };

};