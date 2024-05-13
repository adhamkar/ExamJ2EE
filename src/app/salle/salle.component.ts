import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ExamServiceService} from "../Services/exam-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent implements OnInit{
  public employe:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private service:ExamServiceService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getEmploye(Number(id));
  }
  getEmploye(id: number) {
    this.service.getEmploye(id).subscribe(
      data => {
        this.employe = data;
        this.cdr.detectChanges();
      }, error => {
        console.log(error)
      }
    )
  }
}
