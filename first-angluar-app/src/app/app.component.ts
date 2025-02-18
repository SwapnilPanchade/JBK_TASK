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

  num1 = 10;
}
