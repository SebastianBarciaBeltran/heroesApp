import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

// INTERFACE
import { Heore } from '../../interfaces/heroes.interface';

// SERVICE
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

    heroe !: Heore;


  constructor(private _activatedRoute: ActivatedRoute,
              private _heroService: HeroesService,
              private _router: Router) { }

  ngOnInit(): void {  
  
    this._activatedRoute.params
    .pipe(
      switchMap( ( params ) => this._heroService.getHeroe( params.id ) )
    ).subscribe( heroe => this.heroe = heroe);
    
  }

  return(){
    this._router.navigate(['/heroes/listado']);
  }

}
