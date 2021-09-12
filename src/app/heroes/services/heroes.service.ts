import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//INTERFACES
import { Heore } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  urlHeroes : string = " http://localhost:3000/heroes";


  constructor( private http: HttpClient ) { }


  /**
   * FUNCTIONS RETURNS ALLS HEROES
   * @returns 
   */
  getHeroes(): Observable<Heore[]>{
       return this.http.get<Heore[]>( this.urlHeroes );
  }

  /**
   * FUNCTION RETURNS ONE HEORE BY ID
   * @param id 
   * @returns 
   */
  getHeroe( id: string ): Observable<Heore>{
    return this.http.get<Heore>(`${ this.urlHeroes }/${ id }`);
  }


}
