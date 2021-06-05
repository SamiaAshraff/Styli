import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Category } from './category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// making an AppComponent when the app gets initialized
export class AppComponent implements OnInit {
  // strict property initialization
  categs$!: Category[];

  constructor(private service: AppServiceService) {

  }

  ngOnInit() {
    return this.service.getData().subscribe((response) => this.categs$ = response);
  }


}
