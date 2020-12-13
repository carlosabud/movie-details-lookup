import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = environment.apiAuthToken;

    let req = request;

    if (token) {
      req = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${token}`,
        }),
      });

      return next.handle(req);
    }
  }
}
