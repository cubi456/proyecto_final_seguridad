import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { DniRequest } from '../model/requests/dni-request';
import { DniResponse } from '../model/responses/dni-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DniService {

  constructor(private httpService:HttpService) { }

  postDni(dniRequest:DniRequest):Observable<DniResponse> {
    return <Observable<DniResponse>> this.httpService.post('dni',dniRequest);
  }

}
