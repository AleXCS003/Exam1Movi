import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private booksUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
  private dogImageUrl = 'https://dog.ceo/api/breed/pitbull/images/random';

  constructor(private http: HttpClient) {}

  getAllData(): Observable<[any, any]> {
    const booksRequest = this.http.get(this.booksUrl);
    const dogImageRequest = this.http.get(this.dogImageUrl);
    
    return new Observable(observer => {
      booksRequest.subscribe(books => {
        dogImageRequest.subscribe(dogImage => {
          observer.next([books, dogImage]);
          observer.complete();
        });
      });
    });
  }
}