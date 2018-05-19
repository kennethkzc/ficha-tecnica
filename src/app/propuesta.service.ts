import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Propuesta } from './propuesta';
import { PROPUESTAS } from './mock-propuestas';
@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  constructor() { }

  getPropuestas(): Observable<Propuesta[]>{
    return of(PROPUESTAS);
  }
  getPropuesta(id: number): Observable<Propuesta>{
    return of(PROPUESTAS.find(propuesta => propuesta.id===id))
  }
}
