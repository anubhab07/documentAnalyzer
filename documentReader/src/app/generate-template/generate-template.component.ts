import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-generate-template',
  templateUrl: './generate-template.component.html',
  styleUrls: ['./generate-template.component.scss']
})
export class GenerateTemplateComponent implements OnInit {

  lblList = [];
  bufferX = 8;
  bufferY = 8;
  activeSlideIndex = 0;
  ax: number;
  ay: number;
  bx: number;
  by: number;
  cx: number;
  cy: number;
  dx: number;
  dy: number;
  lblCounter = 1;
  formDataIndex = 0;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.uploadBehavior.subscribe(res => {
      console.log(res.data);
    });
  }

  InitialXY(e) {
    this.ax = e.clientX - 11;
    this.ay = e.clientY - 11;
    this.dx = e.clientX - 11;
    this.by = e.clientY - 11;
  }
  FinalXY(e) {
    this.cx = e.clientX - 11;
    this.cy = e.clientY - 11;
    this.bx = e.clientX - 11;
    this.dy = e.clientY - 11;
    this.enterSaveLabelDetails();
  }
  enterSaveLabelDetails() {
    const lblText = prompt('Enter Field Name :');
    const temp = { lblNum: null, lblText: null, pageNum: null, isPresent: null, xStart: null, xEnd: null, yStart: null, yEnd: null };
    temp.lblNum = this.lblCounter++;
    temp.lblText = lblText;
    temp.xStart = this.ax;
    temp.yStart = this.ay;
    temp.xEnd = this.cx;
    temp.yEnd = this.cy;
    temp.pageNum = 1;
    this.lblList.push(temp);
    this.drawRect(temp);
  }
  drawRect(lbl) {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    ctx.strokeStyle = '#FF0000';
    ctx.rect(lbl.xStart, lbl.yStart, lbl.xEnd - lbl.xStart, lbl.yEnd - lbl.yStart);
    ctx.stroke();
    ctx.strokeText(lbl.lblNum, lbl.xEnd + 10, lbl.yEnd - 10 );
  }
}
