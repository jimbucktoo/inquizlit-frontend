import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { QuestionsComponent } from './questions/questions.component'
import { QuestionSpecificComponent } from './question-specific/question-specific.component'
import { AddQuestionComponent } from './add-question/add-question.component'
import { AuthGuard } from './auth.guard'

const routes: Routes = [
    { path: 'specific/:id', component: QuestionSpecificComponent, canActivate: [AuthGuard] },
    { path: 'add', component: AddQuestionComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: QuestionsComponent, canActivate: [AuthGuard]},
    { path: '', component: LoginComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
