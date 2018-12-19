import { Component, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {GetQuestionsService} from '../get-questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

    faChevronUp = faChevronUp;
    faChevronDown = faChevronDown;
    questions:any;

    constructor(private srv: GetQuestionsService) { }

    ngOnInit() {
        this.getStuff();
    }

    getStuff() {
        this.srv.getData().subscribe(payload=>{
            this.questions = payload;
        })
    }
}
