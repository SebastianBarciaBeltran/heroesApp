import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

// INTERFACES
import { Heore, Publisher } from '../../interfaces/heroes.interface';

// SERVICES
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics'
    }
  ];

  hero : Heore = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  constructor(private _heroeServices: HeroesService,
              private _activatedRouter: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    
    this._activatedRouter.params
    .pipe(
      switchMap( ({id}) => this._heroeServices.getHeroe( id ))
    )
    .subscribe( res => this.hero = res );


  }
  

  save(){
    
    if (this.hero.superhero.trim().length === 0) {
      return;
    }  

    if (this.hero.id) {
      //Actualizar
      this._heroeServices.updateHero( this.hero )
      .subscribe( res => console.log('Actualizado', res));
    } else {
      // nuevo registro
      this._heroeServices.setNewHero( this.hero )
      .subscribe( (res) => {
        this._router.navigate( ['/heroes/editar', res.id ]);
      });
    }




  }

}
