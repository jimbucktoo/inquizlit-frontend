import { Component, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {GetQuestionsService} from '../get-questions.service';
import {GetAnswersService} from '../get-answers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-question-specific',
    templateUrl: './question-specific.component.html',
    styleUrls: ['./question-specific.component.css']
})
export class QuestionSpecificComponent implements OnInit {

    faChevronUp = faChevronUp;
    faChevronDown = faChevronDown;
    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;

    questionBool = true;
    questions:any;
    answers:any;
    question_id:any;

    constructor(private qsrv: GetQuestionsService, private asrv: GetAnswersService, route: ActivatedRoute) { 
        this.question_id = route.snapshot.params['id']
        console.log(this.question_id);
    }

    ngOnInit() {
        this.getQuestions();
        this.getAnswers();
    }

    hideQuestion(){
        if(this.questionBool == false){
            this.questionBool = true; 
        } else {
            this.questionBool = false;
        }
    }

    getQuestions(){
        this.qsrv.getData().subscribe(payload=>{
            console.log(payload);
            this.questions = payload;
        }) 
    }

    getAnswers(){
        this.asrv.getData().subscribe(payload=>{
            console.log(payload);
            this.answers = payload;
        }) 
    }

}
