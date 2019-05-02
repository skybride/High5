import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <img src="assets/images/Logo.png">`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
