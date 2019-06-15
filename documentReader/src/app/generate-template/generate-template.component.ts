import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-generate-template',
  templateUrl: './generate-template.component.html',
  styleUrls: ['./generate-template.component.scss']
})
export class GenerateTemplateComponent implements OnInit, AfterViewInit {

  lblList = [];
  templateId: number;
  barcode: string;
  data = [];
  flag = true;
  respData = {templateId: null, barcode: null, data: null};
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
      if (this.flag) {
        console.log(res);
        if (res !== null){
          //this.templateId = res.data.templateId;
          //this.validateBarcode(res);
        }
        this.flag = false;
      }
    });
  }
  ngAfterViewInit(): void{
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }
/*
  validateBarcode(res) {
    if (!res.barcode){
      this.barcode = prompt('Enter Barcode: ');
    }
    this.setUpImage(res);
  }

  setUpImage(res) {
    let eleDiv = document.getElementById('image-div');
    let eleCan = document.getElementById('myCanvas');
    eleDiv.style.backgroundColor = 'red';
    console.log('1', eleDiv.style.height, eleDiv.style.width, res.data.images[0].height);
    eleDiv.style.height = eleCan.style.height = res.data.images[0].height;
    console.log('2', eleDiv.style.height, eleDiv.style.width, res.data.images[0].height);
    eleDiv.style.width = eleCan.style.width = res.data.images[0].width;
    console.log('3', eleDiv.style.height, eleDiv.style.width, res.data.images[0].height);
    eleDiv.style.backgroundImage = res.data.images[0].imageUrl;
    console.log(eleDiv.style.height, eleDiv.style.width);
  }

  sendResp() {
    this.respData.templateId = this.templateId;
    this.respData.barcode = this.barcode;
    this.respData.data = this.data;
  }
*/
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
    this.barcode = "save labl details";
    temp.lblText = tempdata.label = lblText;
    temp.xStart = tempdata.startX = this.ax;
    temp.yStart = tempdata.startY = this.ay;
    temp.xEnd = tempdata.endX = this.cx;
    temp.yEnd = tempdata.endY = this.cy;
    temp.pageNum = 1;
    this.barcode='push lbl';
    console.log(temp);
    this.lblList.push(temp);
    console.log(this.lblList);
    //this.data.push(tempdata);
    this.drawRect(temp);
  }
  drawRect(lbl) {
    // const c = document.getElementById('myCanvas');
    const ctx = this.context;
    ctx.strokeStyle = '#FF0000';
    ctx.rect(lbl.xStart, lbl.yStart, lbl.xEnd - lbl.xStart, lbl.yEnd - lbl.yStart);
    ctx.stroke();
    this.barcode='stroke';
    ctx.strokeText(lbl.lblNum, lbl.xEnd , lbl.yEnd );
  }
}
