import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllData().subscribe(([books, dogImage]) => {
      console.log(books,dogImage);
      this.items = books.results.map((book: { title: string }, index: number) => ({
        title: book.title,
        image: index % 2 === 0 ? dogImage.message : `https://robohash.org/${book.title}`
      }));
      this.saveBook(this.items[0].title, dogImage.message);
    });
  }
  saveBook(title: string, image: string) {
    console.log('Título:', title, 'Imagen:', image);
    if (!title || !image
    ) {
      console.error('El título o la URL de la imagen no están definidos');
      return;
    }
    this.dataService.saveBookData(title, image)
  
      .then(() => {
        console.log(' Datos guardados con  éxito');
      })
      .catch(error => {
        console.error('Error al guardar el libro: ', error);
      });
  }
}