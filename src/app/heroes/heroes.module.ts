import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from './listado/listado.component';

// DECLARATIONS: Básicamente dice qué cosas contiene este módulo
//  CommonModule : Se utiliza para reconocer directivas *NgFor, *NgIf

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule   
    ]
})

export class HeroesModule {}