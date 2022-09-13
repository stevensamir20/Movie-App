import { Component, OnInit } from '@angular/core';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCircle = faCircleExclamation;

}