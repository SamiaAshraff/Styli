import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// making an AppComponent when the app gets initialized
export class AppComponent implements OnInit {
  title = 'angular-project-frontend';
  constructor(private service: AppServiceService) {

  }

  ngOnInit() {
    this.getDataFromAPI();
  }

  // subscribes to service call and displays appropriate messages
  getDataFromAPI() {
    this.service.getData().subscribe((response) => {
      console.log('Response from API is', response)
    }, (error) => {
      console.log('Error is', error);
    })
  }
}
