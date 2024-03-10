import {Component} from "@angular/core";

// @Component is a decorator that configures an Angular component,
@Component({
  //The custom HTML element where the component will be instantiated.,
  // It's the name you use in your HTML to use the component.
  selector: 'app-user',
  // It can be an inline template (as shown above) or reference an external file.
  template: `
<!--    Property binding allows you to set the value of an HTML element property to the value of a property in the component. -->
    <input type="text" (input)="handleUserInput($event)" value="{{name}}">
    <input type="text" (input)="handleUserInput($event)" [value]="name">
<!--It's very common to listen to an input event and set it to a component's value, Angular has a specific directive
for it called [(ngModel)]-->
<!--Use it when you want to bind a value and the element inputs an event-->
<input type="text" [(ngModel)]="name">

<p>Hello {{name}}</p>
    <p>I'm the user component</p>`
})
// Associate it with a TypeScript class (UserComponent in this case) where you implement the component's functionality.
export class UserComponent {
  name='Ben'
  handleUserInput(event){
    this.name = event.target.value;
  }
}
