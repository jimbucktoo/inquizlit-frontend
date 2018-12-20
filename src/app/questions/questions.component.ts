import { Component, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { GetQuestionsService } from '../get-questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

    faChevronUp = faChevronUp;
    faChevronDown = faChevronDown;
    questions: any;
    filteredQuestions: any;

    constructor(private srv: GetQuestionsService) { }

    ngOnInit() {
        this.getStuff();
    }

    getStuff() {
        this.srv.getData().subscribe(payload => {
            this.questions = payload;
            this.filteredQuestions = this.questions;
        })
    }

    filterQuestions(event) {
        var target = event.srcElement.innerHTML.toLowerCase();
        this.filteredQuestions = this.questions;
        if (target !== 'most popular') {
            this.filteredQuestions = this.questions.filter(question => question.tag === target);
            // this.questions = this.filteredQuestions;
            console.log(this.questions);
            //filter questions by most popular
            //set questions to this new filter
        } else if (target === 'most popular') {
            this.filteredQuestions = this.questions.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes))
            // homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }
        console.log('cats')
        // if (val === '') {
        //     return
        // }
    }

}
