import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private booksUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
  private dogImageUrl = 'https://dog.ceo/api/breed/pitbull/images/random';
  constructor(private http: HttpClient, private firestore: Firestore) {}

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
  async saveBookData(title: string, image: string): Promise<void> {
    try {
      // Referencia a la colección de Firestore
      const booksCollection = collection(this.firestore, 'books');
      await addDoc(booksCollection, {
        title: title,
        imageUrl: image,
      });
      console.log("Libro guardado en Firestore");
    } catch (error) {
      console.error("Error al guardar el libro en Firestore: ", error);
    }
  }
}