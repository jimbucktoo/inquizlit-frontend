import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionSpecificComponent } from './question-specific/question-specific.component';

const routes: Routes = [
    { path: "", component: QuestionsComponent },
    { path: "login", component: LoginComponent },
    { path: "specific", component: QuestionSpecificComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
