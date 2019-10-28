import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  baseUrl: 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Get homes
  getHomes(): Observable<any> {
    return this.http.get(this.baseUrl)
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
