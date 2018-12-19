import { Component, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
    answers:any;

    constructor(private srv: GetAnswersService) { }

    ngOnInit() {
        this.getAnswers();
    }

    hideQuestion(){
        if(this.questionBool == false){
            this.questionBool = true; 
        } else {
            this.questionBool = false;
        }
    }

    getAnswers(){
        this.srv.getData().subscribe(payload=>{
            console.log(payload);
            this.answers = payload;
        }) 
    }

}
