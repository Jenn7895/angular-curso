import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {

  /* TIPADO 
  @Input() personajes: any[] = [];
  */
 // @Input() personajes: Personaje[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }

  // Para que externamente mi input ya no se conozca como personajes
  //@Input('data') personajes: any[] = [];
  constructor ( private dbzService: DbzService ){}
}
