import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dni-error',
  templateUrl: './dni-error.component.html',
  styleUrls: ['./dni-error.component.css']
})
export class DniErrorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  continuar(){
    this.router.navigate(['../dni'])
  }

}
