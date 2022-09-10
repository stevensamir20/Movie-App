import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  menuLinks = [
    { label: 'Movies', path:'movies' },
    { label: 'Login', path:'login' },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}