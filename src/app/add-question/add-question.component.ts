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

    tags = ["Culture Fit", "Algorithms", "Computer Science", "Riddles"];

    model = new NewQuestion();

    modelAnswer = new NewAnswer("", 3, 1, 0, 0);

    onSubmit() {
    };

    constructor(private qsrv: AddQuestionService, private asrv: AddAnswerService) { }

    ngOnInit() {
    };

    newQuestion() {
        this.qsrv.postQuestion(this.model);
        this.asrv.postAnswer(this.modelAnswer);
    };
};
