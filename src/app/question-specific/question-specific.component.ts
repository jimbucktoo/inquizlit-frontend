import { Component, OnInit } from '@angular/core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { GetQuestionsService } from '../get-questions.service'
import { GetAnswersService } from '../get-answers.service'
import { ActivatedRoute } from '@angular/router'
import { AddAnswerService } from '../add-answer.service'
import { NewAnswer } from '../new-answer'

@Component({
    selector: 'app-question-specific',
    templateUrl: './question-specific.component.html',
    styleUrls: ['./question-specific.component.css']
})

export class QuestionSpecificComponent implements OnInit {

    faChevronUp = faChevronUp
    faChevronDown = faChevronDown
    faChevronLeft = faChevronLeft
    faChevronRight = faChevronRight

    questionBool = true
    question: any
    answers: any
    question_id: any
    filteredAnswers: any
    model: any

    constructor(private qsrv: GetQuestionsService, private asrv: GetAnswersService, private asrvpost: AddAnswerService, route: ActivatedRoute) {
        this.question_id = route.snapshot.params['id']
        this.model = new NewAnswer('', +this.question_id, 1, 0, 0)
    }

    ngOnInit() {
        this.getQuestion()
        this.getAnswers()
    }

    hideQuestion() {
        if (this.questionBool == false) {
            this.questionBool = true
        } else {
            this.questionBool = false
            this.getAnswers()
        }
    }

    getQuestion() {
        this.qsrv.getData().subscribe((payload: any) => {
            if (payload) {
                this.question = payload.filter(obj => obj.id == this.question_id)[0].question
            }
        })
    }

    getAnswers() {
        this.asrv.getData().subscribe(payload => {
            this.answers = payload
            this.filteredAnswers = this.answers.filter(answer => answer.question_id == this.question_id)
        })
    }

    newAnswer(){
        this.asrvpost.postAnswer(this.model)
        .then(() => {
            this.hideQuestion()
        })
    }

    upVoteAnswer(id) {
        fetch(`https://inquizlit-backend.herokuapp.com/answers/${id}/upvote`, {
            method: 'PATCH',
        headers: {
            'Content-Type': 'application/json charset=utf-8'
        }
        }).then(response => {
            this.filteredAnswers.map(answer => {
                if (answer.id === id) {
                    return answer.upvotes++
                }
            })
        })
    }

    downVoteAnswer(id) {
        fetch(`https://inquizlit-backend.herokuapp.com/answers/${id}/downvote`, {
            method: 'PATCH',
        headers: {
            'Content-Type': 'application/json charset=utf-8'
        }
        }).then(response => {
            this.filteredAnswers.map(answer => {
                if (answer.id === id) {
                    return answer.downvotes++
                }
            })
        })
    }

}
