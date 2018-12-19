import { Component, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit() {
  }

}
