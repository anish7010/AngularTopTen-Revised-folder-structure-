import { Component, OnInit } from '@angular/core';
import { App } from '../../../configs/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homePage : string = App.homePage;
  constructor() { }

  ngOnInit() {
  } 
}
