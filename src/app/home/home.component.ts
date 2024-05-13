import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ExamServiceService} from "../Services/exam-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
public reservations:any;

  ngOnInit(): void {
    this.getReservations();
  }
  constructor(private http:HttpClient,private router:Router,private service:ExamServiceService) {
  }
getReservations() {
  this.service.getRservations().subscribe(
    data => {
      this.reservations = data;
    }, error => {
      console.log(error)
    }
  )
}

}
