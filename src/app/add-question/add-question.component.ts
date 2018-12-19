import { Component, OnInit } from '@angular/core';
import { NewQuestion } from '../new-question';

@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html',
    styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

    tags = ['Culture Fit', 'Algorithms', 'Computer Science', 'Riddles'];

    model = new NewQuestion(101,"This is a question", this.tags[0], "This is an answer", "Company X", "Iterviewer Y")

    submitted = false;

    onSubmit() { this.submitted = true; }

    constructor() { }

    ngOnInit() {
    }

}
