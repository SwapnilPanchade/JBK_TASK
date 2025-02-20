import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_Direcitives';

  pgNum = 1;

  Student = [
    {
      id: 11,
      name: 'nil',
    },
    {
      id: 22,
      name: 'ram',
    },
  ];

  isDisplay = true;

  items = [1, 3, 3, 4, 3, 6, 6];
  toggle() {
    this.isDisplay = !this.isDisplay;
  }

  textColor = 'red';
  textFont = '20px';
  click() {
    this.textColor = (this.textColor = 'red') ? 'green' : 'red';
  }

  isBasic = false;
}
