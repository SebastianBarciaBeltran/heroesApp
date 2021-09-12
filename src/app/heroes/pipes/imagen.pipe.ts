import { Pipe, PipeTransform } from '@angular/core';

//INTERFACES
import { Heore } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heore): string {

    return `assets/heroes/${ heroe.id }.jpg`;
  
  }

}
