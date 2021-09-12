import { Component, OnInit } from '@angular/core';

// MATERIAL
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

// INTERFACES
import { Heore } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


  term : string = "";
  
  heroes: Heore[] = [];

  heroeSelected : Heore | undefined;


  constructor(private _heroesServices: HeroesService) { }

  ngOnInit(): void {
  
  }

  searching(){

    this._heroesServices.getSuggestions( this.term.trim() )
    .subscribe(heroes => this.heroes = heroes);
  
  }

  optionSelected( event: MatAutocompleteSelectedEvent ){
 
    //TODO: validar si es un string vacio 

      if (!event.option.value) {
        this.heroeSelected = undefined;
        return;
      }
   
      const HEROE: Heore = event.option.value
      
      this.term = HEROE.superhero;
     
      this._heroesServices.getHeroe( HEROE.id! )
      .subscribe( heroe => this.heroeSelected = heroe );
    
      
  }
}
