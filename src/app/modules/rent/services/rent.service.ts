import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Get homes
  getHomes(): Observable<any> {
    const url = this.baseUrl + '/rent';
    console.log(url);
    return this.http.get(url)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  // Get homes
  getHome(id: string): Observable<any> {
    const url = this.baseUrl + '/rent/houses/' + id;
    return this.http.get(url)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  // Error handling
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
