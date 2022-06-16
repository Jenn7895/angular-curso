import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    nombre: '',
  }

  constructor (private dbzService: DbzService) {}
  /* EVENTO EVENT
    agregar( event:any ) {
    event.preventDefault();
    console.log('Hey!!!!');
  } */

  // cambiarNombre( event: any ){
  //   console.log( event.target.value );
    
  // }

  // @Output : Sirve para emitir eventos
  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  // TRIM : Para borrar espacios en blanco
  agregar() {
    if (this.nuevo.nombre.trim().length === 0){ return; }
    
    if (this.nuevo.poder === undefined) {
      this.nuevo.poder = 0;
    }

    this.dbzService.agregarPersonaje( this.nuevo );
    // Cuando ya tenemos la información es el momento de emitir el evento
    //console.log( this.nuevo );
   // this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
    }
  }
}
