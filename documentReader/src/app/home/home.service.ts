import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const HttpUploadOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  uploadBehavior: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  verifyRes: any = null;

  constructor(private httpClient: HttpClient) { }

  uploadFile(file) {
    const url = 'assets/docs/form-data.json';
    const input = new FormData();
    input.append('file', file);
    this.httpClient.post(url, input, HttpUploadOptions).subscribe((res) => {
      this.uploadBehavior.next(res);
    });
  }

  getAllTemplates() {
    const url = 'assets/docs/templateList.json';
    return this.httpClient.get(url)
    .pipe(
      catchError(this.handleError('getAllTemplates', []))
    );
  }

  verifyTemplate(file, barcode) {
    const url = 'assets/docs/form-data.json?barcode=' + barcode;
    const input = new FormData();
    input.append('file', file);
    return this.httpClient.post(url, input, HttpUploadOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }}
