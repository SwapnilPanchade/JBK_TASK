import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angluar-app';
  username = 'angular_input';

  clickMe() {
    alert('hi');
  }

  inEdit = true;
  student = [
    { id: 1, name: 'Visal', age: 20, course: 'Math', marks: 85 },
    { id: 2, name: 'Akshay', age: 21, course: 'Science', marks: 90 },
    { id: 3, name: 'Swap', age: 22, course: 'History', marks: 88 },
    { id: 4, name: 'Kol', age: 23, course: 'Physics', marks: 92 },
    { id: 5, name: 'Rohit', age: 24, course: 'English', marks: 87 },
  ];
  isEditing(student : any){
    student.isEdit = true;
  }

  save(student : any){
    student.isEdit = false;
  }
  cancle(student: any){
    student.isEdit = false;
  }

  num1 = 10;
}
