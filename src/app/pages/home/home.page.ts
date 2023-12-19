import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  characters: any[] = [];
  currentPage = 1;
  searchTerm = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(event?: any) {
    const url = `https://rickandmortyapi.com/api/character/?page=${this.currentPage}&name=${this.searchTerm}`;

    if (event) {
      this.currentPage++;
    }

    this.http.get<any>(url)
      .subscribe(
        (res) => {
          console.log(res);
          this.characters = this.characters.concat(res.results);
          
          if (event && event.target && typeof event.target.complete === 'function') {
            event.target.complete();
          }
        },
        (error) => {
          console.error('Error fetching characters:', error);
          
          if (event && event.target && typeof event.target.complete === 'function') {
            event.target.complete();
          }
        }
      );
  }

  onSearchChange(event: any) {
    console.log('Evento de búsqueda:', event);
    this.currentPage = 1;
    this.searchTerm = event.target.value || '';
    this.loadData(event);
  }
}
