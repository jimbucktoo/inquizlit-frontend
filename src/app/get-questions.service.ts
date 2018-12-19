import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("https://inquizlit-backend.herokuapp.com/questions");
  }

}
