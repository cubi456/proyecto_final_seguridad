import { Component, OnInit } from '@angular/core';
import { SelfieResponse } from 'src/app/model/responses/selfie-response';
import { SelfieService } from 'src/app/services/selfie.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  public identidadResponse:SelfieResponse | any;
  public regex = new RegExp(/\-/gi);

  constructor(private selfieService:SelfieService) { }

  ngOnInit(): void {
    this.identidadResponse = this.selfieService.selfieResponse
  }

}
