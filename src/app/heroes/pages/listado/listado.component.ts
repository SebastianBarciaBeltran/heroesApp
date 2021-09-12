import { Component, OnInit } from '@angular/core';

// INTERFACES
import { Heore } from '../../interfaces/heroes.interface';

// SERVICES
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  // VARIABLES
  heroes: Heore[] = [];

  constructor( private _heroesServices: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(){
    this._heroesServices.getHeroes()
    .subscribe( (res) => {
        this.heroes = res;
        // console.log(res);
    });
  }

}
