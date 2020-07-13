import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { QuestionsComponent } from './questions/questions.component'
import { QuestionSpecificComponent } from './question-specific/question-specific.component'
import { AddQuestionComponent } from './add-question/add-question.component'
import { AuthGuard } from './auth.guard'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptorService } from './interceptor.service'

const routes: Routes = [
    { path: 'specific/:id', component: QuestionSpecificComponent, canActivate: [AuthGuard] },
    { path: 'add', component: AddQuestionComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: QuestionsComponent, canActivate: [AuthGuard]},
    { path: '', component: LoginComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ]
})
export class AppRoutingModule { }
