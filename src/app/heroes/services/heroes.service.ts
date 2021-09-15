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

  /**
   * FUNCTION RETURN THE SUGGESTIONS OF SEARCH COMPONENTS
   * @param term 
   * @returns 
   */
  getSuggestions( term: string ): Observable<Heore[]>{
    return this.http.get<Heore[]>( `${ this.baseUrl }/heroes?q=${ term }&_limit=6`);
  }

  /**
   * FUNCTION SET A NEW HERO IN DB 
   * @param hero 
   * @returns 
   */
  setNewHero(hero: Heore):Observable<Heore>{
      return this.http.post<Heore>(`${ this.baseUrl}/heroes`, hero );
  }


  /**
   * FUNCTION THAT UPDATE A HERO
   * @param hero 
   * @returns 
   */
  updateHero(hero: Heore):Observable<Heore>{
      return this.http.put<Heore>(`${ this.baseUrl}/heroes/${ hero.id }`, hero );
  }


  deleteHero( id: string ):Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/heroes/${ id }`);
  }


  

}
