import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-bug',
    templateUrl: './app2.component.html'
  })
export class CourseListComponent implements OnInit {
  courses: Course[]=[];
ngOnInit(): void{
 this.courses=[
  {
    id: 1,
    name: 'felipe',
    imageUrl:'',
    price: 293.3,
    code: 'XPS-986',
    duration:120,
    rating: 4.2,
    release:2002

  },
  {
    id: 2,
    name: 'lipe',
    imageUrl:'',
    price: 300.3,
    code: 'XPT-246',
    duration:100,
    rating: 5,
    release:2031

  }
 ]
}
}






  
  