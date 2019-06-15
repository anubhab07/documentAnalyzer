import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HomeService } from './home.service';
import { IFormResponse } from '../interfaces/IFormResponse';
import { ITemplateResponse } from '../interfaces/ITemplateResponse';
import { ITemplate } from '../interfaces/ITemplate';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  validationForm: FormGroup;
  fileResult;
  templateLst: ITemplate[] = [];
  isFileUploaded = false;
  uploadedFile;

  constructor(private homeService: HomeService, public fb: FormBuilder) {
    this.validationForm = fb.group({
      nameForm: [null, Validators.required],
    });
   }

  ngOnInit() {
    this.getAllTemplates();
  }

  uploadImage(event) {
    const file = event.target.files[0];
    console.log(file);
    this.isFileUploaded = true;
  }

  saveImage() {
    if (this.uploadedFile) {
      this.homeService.uploadFile(this.uploadedFile).subscribe(res => {
        console.log(res);
      });
    }
  }

  getAllTemplates() {
    this.homeService.getAllTemplates().subscribe((res: ITemplateResponse) => {
      console.log(res);
      this.templateLst = res.data;
    });
  }
  get nameForm() { return this.validationForm.get('nameForm'); }

}
