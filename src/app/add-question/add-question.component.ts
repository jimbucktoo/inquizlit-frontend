import { Component, OnInit } from '@angular/core';
import { NewQuestion } from '../new-question';
import { AddQuestionService } from '../add-question.service';

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

    onSubmit() {
    }

    constructor(private service: AddQuestionService) { }

    ngOnInit() {
    }

    newQuestion() {
        this.service.postQuestion(this.model);
      
    }
}
