import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selfie-error',
  templateUrl: './selfie-error.component.html',
  styleUrls: ['./selfie-error.component.css']
})
export class SelfieErrorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  continuar(){
    this.router.navigate(['../selfie'])
  }
}
