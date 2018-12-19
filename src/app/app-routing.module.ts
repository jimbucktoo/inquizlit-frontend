import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionSpecificComponent } from './question-specific/question-specific.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
    { path: "", component: QuestionsComponent },
    { path: "login", component: LoginComponent },
    { path: "specific", component: QuestionSpecificComponent },
    { path: "signup", component: SignUpComponent },
    { path: "add", component: AddQuestionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
