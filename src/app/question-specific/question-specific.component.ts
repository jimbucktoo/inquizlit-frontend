import { Component, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-specific',
  templateUrl: './question-specific.component.html',
  styleUrls: ['./question-specific.component.css']
})
export class QuestionSpecificComponent implements OnInit {

  faChevronUp = faChevronUp;

  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit() {
  }

}
