import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { QuestionsComponent } from './questions/questions.component'
import { LoginComponent } from './login/login.component'
import { QuestionSpecificComponent } from './question-specific/question-specific.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { AddQuestionComponent } from './add-question/add-question.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        QuestionsComponent,
        LoginComponent,
        QuestionSpecificComponent,
        AddQuestionComponent,
        FooterComponent
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
