import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.startsWith('/')) {
      const newRequest = req.clone({
        url: `${environment.baseUrl}${req.url}`
      });
      return next.handle(newRequest);
    }
    return next.handle(req);
  }
}
