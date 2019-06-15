import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-generate-template',
  templateUrl: './generate-template.component.html',
  styleUrls: ['./generate-template.component.scss']
})
export class GenerateTemplateComponent implements OnInit,AfterViewInit {

  lblList = [];
  data = [];
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

  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.uploadBehavior.subscribe(res => {
      console.log(res.data);
    });
  }
  ngAfterViewInit(): void{
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }

  InitialXY(e) {
    this.ax = e.clientX;
    this.ay = e.clientY;
    this.dx = e.clientX;
    this.by = e.clientY;
  }
  FinalXY(e) {
    this.cx = e.clientX;
    this.cy = e.clientY;
    this.bx = e.clientX;
    this.dy = e.clientY;
    this.enterSaveLabelDetails();
  }
  enterSaveLabelDetails() {
    const lblText = prompt('Enter Field Name :');
    const temp = { lblNum: null, lblText: null, pageNum: null, isPresent: null, xStart: null, xEnd: null, yStart: null, yEnd: null };
    const tempdata = { label: null, pageNo: null, startX: null, startY: null, endX: null, endY: null };
    temp.lblNum = this.lblCounter++;
    temp.lblText = tempdata.label = lblText;
    temp.xStart = tempdata.startX = this.ax;
    temp.yStart = tempdata.startY = this.ay;
    temp.xEnd = tempdata.endX = this.cx;
    temp.yEnd = tempdata.endY = this.cy;
    temp.pageNum = 1;
    this.lblList.push(temp);
    this.data.push(tempdata);
    this.drawRect(temp);
  }
  drawRect(lbl) {
    // const c = document.getElementById('myCanvas');
    const ctx = this.context;
    ctx.strokeStyle = '#FF0000';
    ctx.rect(lbl.xStart, lbl.yStart, lbl.xEnd - lbl.xStart, lbl.yEnd - lbl.yStart);
    ctx.stroke();
    ctx.strokeText(lbl.lblNum, lbl.xEnd , lbl.yEnd );
  }
}
