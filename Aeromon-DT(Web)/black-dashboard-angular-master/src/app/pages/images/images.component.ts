import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var Plotly: any;

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;
  constructor() {
    // usr.getData();
  }

  ngOnInit() {
    // this.basicChart();
  }
  basicChart() {
    const element = this.el.nativeElement;
    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 6, 7]
    }]
    const style = [
      { margin: 0 }
    ]
    Plotly.plot(element, data, style)
  }

}
