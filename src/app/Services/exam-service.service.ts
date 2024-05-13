import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {
  public host:String="http://localhost:8085"
  constructor(private http:HttpClient) { }

  public getRservations(){
    return this.http.get(this.host+"/reservations");
  }
  public getEmploye(id: number) {
    return this.http.get(this.host + "/employe/" + id);

  }

}
