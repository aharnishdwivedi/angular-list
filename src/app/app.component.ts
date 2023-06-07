import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>API List</h1>
    <input type="text" [(ngModel)]="searchTerm" placeholder="Search API" />
    <button (click)="search()">Search</button>
    <ul>
      <li *ngFor="let entry of filteredApiList">{{ entry.API }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiList!: any[];
  filteredApiList!: any[];
  searchTerm: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getList().subscribe(data => {
      this.apiList = data.entries;
      this.filteredApiList = this.apiList;
    });
  }

  search() {
    if (this.searchTerm.trim() === '') {
      this.filteredApiList = this.apiList;
    } else {
      this.filteredApiList = this.apiList.filter((entry: any) =>
        entry.API.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
