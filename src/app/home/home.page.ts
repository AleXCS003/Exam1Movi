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
    });
  }
}