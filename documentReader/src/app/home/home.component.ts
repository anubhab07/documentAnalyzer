import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fileResult;
  constructor() { }

  ngOnInit() {
  }

  uploadImage(event) {
    const imgFile = event.target.files[0];
    console.log(imgFile);
    // this.validateFile(imgFile);
  }

}
