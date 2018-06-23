import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellouscomp',
  template: '<h2> Inside my {{Demo}} </h2>',
  styleUrls: ['./marvellouscomp.component.css']
})
export class MarvellouscompComponent implements OnInit {

  constructor() {}
   Demo="Pune";

  ngOnInit() {
  }

}
