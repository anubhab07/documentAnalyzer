import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { IFormResponse } from '../interfaces/IFormResponse';
import {IFormData} from '../interfaces/IFormData';
import {ICoordinates} from '../interfaces/ICoordinates';
import { CarouselComponent} from 'angular-bootstrap-md';
@Component({
  selector: 'app-verify-template',
  templateUrl: './verify-template.component.html',
  styleUrls: ['./verify-template.component.scss']
})
export class VerifyTemplateComponent implements OnInit {

  @ViewChild('canvas', {static: false}) public canvas: ElementRef;
  @ViewChild('pdf', {static: false}) imageObj: ElementRef;
  @ViewChild('carouselRef', {static: false}) carouselRef;

  title = 'documentReader';
  formData: IFormData[] = [];
  xCoord;
  yCoord;
  bufferX = 8;
  bufferY = 8;
  activeSlideIndex = 0;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getFormData();
    console.log(window.pageXOffset, window.pageYOffset);
  }

  getFormData() {
    this.appService.getFormData().subscribe((res: IFormResponse) => {
      console.log(res);
      this.formData = res.data;
    });
    // this.placeDiv(20, 20);
  }

  placeDiv(coordinates: ICoordinates, pageNo) {
    this.carouselRef.selectSlide(pageNo);
    // console.log(this.carouselRef)
    this.activeSlideIndex = pageNo;
    const xStart = coordinates.xStart - this.bufferX;
    const yStart = coordinates.yStart - this.bufferY;
    const width = coordinates.xEnd - coordinates.xStart;
    const height = coordinates.yEnd - coordinates.yStart;
    const d = document.getElementById('drawBorderDiv');
    d.style.display = 'block';
    d.style.position = 'absolute';
    d.style.left = xStart + 'px';
    d.style.top = yStart + 'px';
    d.style.width = width + 'px';
    d.style.height = height + 'px';
  }

  hideDiv() {
    const d = document.getElementById('drawBorderDiv');
    d.style.display = 'none';
    // console.log('hide');
  }

  getCoordinates(event) {
    // console.log(event)
    this.xCoord = event.x;
    this.yCoord = event.y;
  }

}
