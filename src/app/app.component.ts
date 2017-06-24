import {Component, OnInit} from '@angular/core';
import { hitAreas } from 'ngvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pixelHitArea = hitAreas.PixelHitArea;
  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
  }

  onNgvasInit() {
    console.log('onNgvasInit');
  }

  onClickHandler(event) {
    console.log(event);
  }
}
