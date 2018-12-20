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
    question:any;
    answers:any;
    question_id:any;
	random:any;


    constructor(private qsrv: GetQuestionsService, private asrv: GetAnswersService, route: ActivatedRoute) {
        this.question_id = route.snapshot.params['id']
		this.random_id = route.snapshot.params['id']
        console.log(this.question_id);
    }

    ngOnInit() {
        this.getQuestion();
        this.getAnswers();
		this.randomQuestion();
    }

    hideQuestion(){
        if(this.questionBool == false){
            this.questionBool = true;
        } else {
            this.questionBool = false;
        }
    }

	randomQuestion(){
		this.qsrv.getData().subscribe((payload:random) => {
			if(payload){
				this.random = payload.filter(obj => null == this.random_id)[0].question;
				console.log(this.random)
			}
		})
	}

    getQuestion(){
        this.qsrv.getData().subscribe((payload:any) => {
            if(payload){
				this.question = payload.filter(obj => obj.id == this.question_id)[0].question;

            }
        })
    }

    getAnswers(){
        this.asrv.getData().subscribe(payload=>{
            this.answers = payload;
        })
    }

}
