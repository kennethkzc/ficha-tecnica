import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Propuesta } from '../propuesta';
import {PropuestaService} from '../propuesta.service';

@Component({
  selector: 'app-propuesta-detail',
  templateUrl: './propuesta-detail.component.html',
  styleUrls: ['./propuesta-detail.component.css']
})
export class PropuestaDetailComponent implements OnInit {
  @Input() propuesta: Propuesta;

  constructor(
    private route: ActivatedRoute,
    private propuestaService: PropuestaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPropuesta();
  }
  
  getPropuesta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.propuestaService.getPropuesta(id)
      .subscribe(propuesta => this.propuesta = propuesta);
  }

}
