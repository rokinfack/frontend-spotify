import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent {
  helloMessage: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getHelloMessage().subscribe(
      (response) => {
        this.helloMessage = response.message;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
