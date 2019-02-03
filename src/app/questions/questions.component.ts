import { Component, OnInit } from "@angular/core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { GetQuestionsService } from "../get-questions.service";
import { GetAnswersService } from "../get-answers.service"

@Component({
    selector: "app-questions",
    templateUrl: "./questions.component.html",
    styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {

    faChevronUp = faChevronUp;
    faChevronDown = faChevronDown;
    questions: any;
    answers: any;
    filteredQuestions: any = [];

    constructor(private srv: GetQuestionsService, private asrv: GetAnswersService) { }

    ngOnInit() {
        this.getQuestions();
        this.getAnswers();

    };

    getQuestions() {
        this.srv.getData().subscribe(payload => {
            console.log("refreshing questions page")
            this.questions = payload;
            this.filteredQuestions = this.questions;
        })
    };

    getAnswers() {
        this.asrv.getData().subscribe(payload => {
            this.answers = payload;
        })
    };

    getNumberOfAnswers(id) {
        let count = this.answers.filter(answer => answer.question_id === id).length;
        if (count > 0) {
            return count;
        };
        return 0;
    };

    filterQuestions(event) {
        var target = event.srcElement.innerHTML.toLowerCase();
        this.filteredQuestions = this.questions;
        if (target !== "most popular") {
            this.filteredQuestions = this.questions.filter(question => question.tag === target);
        } else if (target === "most popular") {
            this.filteredQuestions = this.questions.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
        };
    };

    upVoteQuestion(id) {
        fetch(`https://inquizlit-backend.herokuapp.com/questions/${id}/upvote`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(response => {
            this.filteredQuestions.map(question => {
                if (question.id === id) {
                    return question.upvotes++;
                };
            });
        });
    };

    downVoteQuestion(id) {
        fetch(`https://inquizlit-backend.herokuapp.com/questions/${id}/downvote`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(response => {
            this.filteredQuestions.map(question => {
                if (question.id === id) {
                    return question.downvotes++;
                };
            });
        });
    };

};
