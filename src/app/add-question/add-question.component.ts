import { Component, OnInit } from '@angular/core';
import { NewQuestion } from '../new-question';

@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html',
    styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
    form: any;

    tags = ['Culture Fit', 'Algorithms', 'Computer Science', 'Riddles'];

    model = new NewQuestion()

    // submitted = false;

    onSubmit() {console.log("this is submitted")}
 
    newQuestion() {
      console.log(this.model)
    }

    constructor() { }

    ngOnInit() {
    }

}
