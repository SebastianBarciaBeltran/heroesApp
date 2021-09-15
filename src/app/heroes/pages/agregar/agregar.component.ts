import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

// INTERFACES
import { Heore, Publisher } from '../../interfaces/heroes.interface';

// SERVICES
import { HeroesService } from '../../services/heroes.service';

// MATERIAL
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

// COMPONENTS
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `
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
              private _router: Router,
              private _snackBar: MatSnackBar,
              public  dialog: MatDialog) { }

  ngOnInit(): void {
    
    if ( !this._router.url.includes('editar') ) {
      return;
    } else{

      this._activatedRouter.params
      .pipe(
        switchMap( ({id}) => this._heroeServices.getHeroe( id ))
      )
      .subscribe( res => this.hero = res );

    }

  }
  

  save(){
    
    if (this.hero.superhero.trim().length === 0) {
      return;
    }  

    if (this.hero.id) {

      this._heroeServices.updateHero( this.hero )
      .subscribe( res => this.showSnackBar('Registro Actualizado'));
    } else {
    
      this._heroeServices.setNewHero( this.hero )
      .subscribe( (res) => {
        this._router.navigate( ['/heroes/editar', res.id ]);
        this.showSnackBar('Registro creado correctamente!');
      });
    
    }

  }

  deleteHero(){

    const dialog = this.dialog.open( ConfirmationComponent,{
      width: '350px',
      data: {...this.hero}
    });

    dialog.afterClosed()
    .subscribe( (res) => {
      //  console.log(res)
      if ( res ) {
        this._heroeServices.deleteHero( this.hero.id! )
        .subscribe( res => {
          this._router.navigate(['/heroes']);
        });
        
      }
    });



  }

  showSnackBar( messsage: string ){

    this._snackBar.open( messsage, 'ok!', {
      duration: 2500
    })

  }

}
