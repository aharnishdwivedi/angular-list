import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  apiList!: any[]; 

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getList().subscribe(data => {
      this.apiList = data.entries;
    });
  }
}
