import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-template',
  templateUrl: './upload-template.component.html',
  styleUrls: ['./upload-template.component.scss']
})
export class UploadTemplateComponent implements OnInit {

  fileResult;
  constructor() { }

  ngOnInit() {
  }

  uploadImage(event) {
    const imgFile = event.target.files[0];
    console.log(imgFile);
    // this.validateFile(imgFile);
  }

  validateFile(file) {
    // this.photoUploadError = false;
    console.log('start loader');

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (e) => {
      const fileText = fileReader.result;
      const fileBase64 = (fileText as string).split(',')[1];
      // console.log(fileBase64);

    };
  }

}
