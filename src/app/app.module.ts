import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { QuestionSpecificComponent } from './question-specific/question-specific.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        QuestionsComponent,
        LoginComponent,
        QuestionSpecificComponent,
        SignUpComponent,
        AddQuestionComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
