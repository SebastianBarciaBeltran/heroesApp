import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//INTERFACES
import { Heore } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  private baseUrl : string = environment.baseUrl;


  constructor( private http: HttpClient ) { }


  /**
   * FUNCTIONS RETURNS ALLS HEROES
   * @returns 
   */
  getHeroes(): Observable<Heore[]>{
       return this.http.get<Heore[]>( `${ this.baseUrl }/heroes`);
  }

  /**
   * FUNCTION RETURNS ONE HEORE BY ID
   * @param id 
   * @returns 
   */
  getHeroe( id: string ): Observable<Heore>{
    return this.http.get<Heore>(`${ this.baseUrl }/heroes/${ id }`);
  }


}
