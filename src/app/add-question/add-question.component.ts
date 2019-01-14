import { Component, OnInit } from "@angular/core";
import { NewQuestion } from "../new-question";
import { AddQuestionService } from "../add-question.service";
import { AddAnswerService } from "../add-answer.service";
import { NewAnswer } from "../new-answer";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-add-question",
    templateUrl: "./add-question.component.html",
    styleUrls: ["./add-question.component.css"]
})

export class AddQuestionComponent implements OnInit {
    form: any;
    tags = ["Culture Fit", "Algorithms", "Computer Science", "Riddles"];
    questions: any;
    model = new NewQuestion();
    modelAnswer= new NewAnswer("", 0, 1, 0, 0);

    onSubmit() {
    };

    constructor(private qsrvpost: AddQuestionService, private asrvpost: AddAnswerService, private route: ActivatedRoute, private router: Router, ) {}

    ngOnInit() {   

    };

    newQuestion() {
        this.model.tag = this.model.tag.toLowerCase();
        this.qsrvpost.postQuestion(this.model)
        .then(response =>{
            return response[0].id
        })  
        .then((response) => {
            this.modelAnswer.question_id = response;
            return this.asrvpost.postAnswer(this.modelAnswer);
        })
        .then(() => {
            this.router.navigate([""])
        })
    };

};