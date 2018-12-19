import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { QuestionSpecificComponent } from './question-specific/question-specific.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        QuestionsComponent,
        LoginComponent,
        QuestionSpecificComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
