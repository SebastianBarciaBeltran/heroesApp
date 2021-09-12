import { Component, Input, OnInit } from '@angular/core';

// INTERFACE
import { Heore } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card {
      margin-top: 20px;
    }
    `
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe !: Heore;


  constructor() { }

  ngOnInit(): void {
  }

}
