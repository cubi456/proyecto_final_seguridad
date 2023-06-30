import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token:string ="";

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.indexOf('/dni') === -1)
        request = request.clone({
          setHeaders: { Authorization:'Baerer '+this.token }
        });
      else
         return next.handle(request).pipe(map(res =>{
            if (res instanceof HttpResponse)
              this.token = res.body.token;
            return res;
          }));
    //Limpio el token en caso de un 403
    return next.handle(request).pipe(catchError(error=>{
      if(!(error instanceof ErrorEvent)){
          if(error.status == 403)
            this.token = '';
      }
      return throwError(error);
    }));
  }
}
