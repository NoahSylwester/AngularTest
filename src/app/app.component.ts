import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Test';
  myArray = [1,2,3];
  inputValue = '';
  onChange(item) {
    this.inputValue = item;
  }
  increment() {
    this.myArray.push(this.myArray.length + 1);
  }
}
