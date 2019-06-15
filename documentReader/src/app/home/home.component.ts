import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HomeService } from './home.service';
import { IFormResponse } from '../interfaces/IFormResponse';
import { ITemplateResponse } from '../interfaces/ITemplateResponse';
import { ITemplate } from '../interfaces/ITemplate';
import {Router} from '@angular/router';


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
  getBarcode = false;
  uploadedTemplate;
  verifyFile;
  uploadedFile;

  constructor(private homeService: HomeService, public fb: FormBuilder, private router: Router) {
    this.validationForm = fb.group({
      nameForm: [null, Validators.required],
    });
   }

  ngOnInit() {
    this.getAllTemplates();
  }

  uploadImage(event) {
    this.uploadedTemplate = event.target.files[0];
    // console.log(file);
    this.isFileUploaded = true;
  }

  saveImage() {
    if (this.uploadedTemplate) {
      this.homeService.uploadFile(this.uploadedTemplate, this.nameForm);
      this.router.navigate(['/generate']);
    }
  }

  getAllTemplates() {
    this.homeService.getAllTemplates().subscribe((res: ITemplateResponse) => {
      console.log(res);
      this.templateLst = res.data;
    });
  }
  get nameForm() { return this.validationForm.get('nameForm'); }

  uploadVerifyTemplate(event) {
    this.verifyFile = event.target.files[0];
    console.log(this.verifyFile);
    this.verifyTemplate();
  }

  verifyTemplate() {
    const barcode = this.nameForm;
    this.homeService.verifyTemplate(this.verifyFile, barcode).subscribe((res: IFormResponse) => {
      if (res.status === 1) {
        this.homeService.verifyRes = res;
        this.router.navigate(['/generate']);

      } else if (res.status === 2 ) {
        this.getBarcode = true;
      }
    });
  }
}
