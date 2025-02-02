import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  constructor(private readonly httpClient: HttpClient) {}

  getGreeting() {
    return this.httpClient.get('/tomcatTest/rest/greeting/get', {
      responseType: 'text',
    });
  }
}
