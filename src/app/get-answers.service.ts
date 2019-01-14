import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class GetAnswersService {

    constructor(private http:HttpClient) { }

    getData(){
        return this.http.get("http://localhost:3001/answers");
    };
    
};
