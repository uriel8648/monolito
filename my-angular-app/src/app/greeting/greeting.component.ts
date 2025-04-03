import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  // Ensure ApiService is imported correctly

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  greetingMessage: string = ''; // Initialize the property

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGreeting().subscribe(message => {
      this.greetingMessage = message;
    });
  }
 
}