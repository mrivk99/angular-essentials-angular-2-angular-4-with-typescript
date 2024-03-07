import {Component} from "@angular/core";

// @Component is a decorator that configures an Angular component,
@Component({
  //The custom HTML element where the component will be instantiated.,
  // It's the name you use in your HTML to use the component.
  selector: 'app-user',
  // It can be an inline template (as shown above) or reference an external file.
  template: `
    <input type="text" (input)="handleUserInput($event)">
    <p>Hello {{name}}</p>
    <p>I'm the user component</p>`
})
// Associate it with a TypeScript class (AppComponent in this case)
// where you implement the component's functionality.
export class UserComponent {
  name='Ben'
  handleUserInput(event){
    this.name = event.target.value;
  }
}
