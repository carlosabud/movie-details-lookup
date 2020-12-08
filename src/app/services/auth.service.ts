import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  apiKey = environment.apiKey;

  authenticate() {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${this.apiKey}`
    );
  }
}
