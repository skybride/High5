import { Component, OnInit, Input } from '@angular/core';
import { NgbAccordionConfig, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbAccordionConfig, NgbAlertConfig]
})
export class MainComponent implements OnInit {
  @Input() public alerts: Array<string> = [];

  image: string;
  image2: string;
  image3: string;

  constructor( config: NgbAccordionConfig, alertConfig: NgbAlertConfig) {
    alertConfig.type = 'danger';
    alertConfig.dismissible = false;

    this.image = '/assets/images/Bar1.jpg';
    this.image2 = '/assets/images/Bar2.jpg';
    this.image3 = '/assets/images/Dining1.jpg';

    config.type = 'dark';
   }

  ngOnInit() {
  }

}
