import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { SelfieRequest } from '../model/requests/selfie-request';
import { SelfieResponse } from '../model/responses/selfie-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private httpService:HttpService) { }

  postSelfie(selfieRequest:SelfieRequest):Observable<SelfieResponse>{
    return <Observable<SelfieResponse>>this.httpService.post('/selfie',selfieRequest);
  }

}
