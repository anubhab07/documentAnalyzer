import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const HttpUploadOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private httpClient: HttpClient) { }

  uploadFile(file) {
    const url = 'assets/docs/form-data.json';
    const input = new FormData();
    input.append('file', file);
    return this.httpClient.post(url, input, HttpUploadOptions)
      .pipe(
        catchError(this.handleError('uploadFile', []))
      );
  }

  getAllTemplates() {
    const url = 'assets/docs/templateList.json';
    return this.httpClient.get(url)
    .pipe(
      catchError(this.handleError('getAllTemplates', []))
    );
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
