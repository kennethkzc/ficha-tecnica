import { Component, OnInit } from '@angular/core';
import { PROPUESTAS } from '../mock-propuestas';
@Component({
  selector: 'app-propuestas',
  templateUrl: './propuestas.component.html',
  styleUrls: ['./propuestas.component.css']
})
export class PropuestasComponent implements OnInit {
  propuestas=PROPUESTAS;
  constructor() { }

  ngOnInit() {
  }

}
