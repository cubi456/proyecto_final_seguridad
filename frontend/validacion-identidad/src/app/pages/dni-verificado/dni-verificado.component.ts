import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dni-verificado',
  templateUrl: './dni-verificado.component.html',
  styleUrls: ['./dni-verificado.component.css']
})
export class DniVerificadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  continuar(){
    this.router.navigate(['../selfie'])
  }
}
