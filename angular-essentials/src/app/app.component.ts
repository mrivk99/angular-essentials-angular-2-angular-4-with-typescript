import { Component } from '@angular/core';

@Component({
  // CSS Selector that tell Angular which element to select; should be unique
  selector: 'app-root',
  // render the below component for the above selector
  templateUrl: './app.component.html',
  // render the below CSS for the above template
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
}
