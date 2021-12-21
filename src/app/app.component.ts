import { Component, OnInit } from '@angular/core';
import * as data from './Data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-read-data-json';

  ngOnInit() {
      console.log(data);
  }

}
