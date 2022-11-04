import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

  constructor() { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let auth_header = "";

    let token = localStorage.getItem("token");

    if (token) {

      req = req.clone({

        url: req.url,

        setHeaders: {

          Authorization: `Bearer ${token}`

        },

        withCredentials: true

      });

    }

    return next.handle(req).pipe();

  }



}