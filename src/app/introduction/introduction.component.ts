import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  introduction = 'En el presente documento se detallará la información del equipo Royal Solutions. El documento constará de dos secciones, datos del equipo y el reglamento que se llevará a cabo a lo largo de la construcción del proyecto.\n' +
    '\tEn la sección de datos del equipo se hablará de detalles como nombre del grupo junto con su logotipo, la misión, la visión y los valores que tendrá que tomar presente el equipo de desarrollo a lo largo de todo el proyecto. Además de estos datos también se incluirán los datos de cada uno de los miembros de Royal Solutions.\n' +
    '\tEn el apartado del reglamento del equipo se detallarán una serie de reglas que se deberán de cumplir para trabajar con el mayor orden y profesionalismo posible. Las reglas se adaptarán al equipo para que puedan ser cumplidas por todos los miembros. Se tomarán en cuenta detalles como sanciones y llamadas de atención.\n';

  constructor() { }

  ngOnInit() {
  }

}
