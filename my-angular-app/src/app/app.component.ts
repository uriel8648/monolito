// app.component.ts
import { Component } from '@angular/core';
import { GreetingComponent } from "./greeting/greeting.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  imports: [GreetingComponent],
 
 
})
export class AppComponent {
  title = 'my-angular-app';
}
