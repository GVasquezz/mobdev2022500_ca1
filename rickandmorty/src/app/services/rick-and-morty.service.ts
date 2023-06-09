import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }
  
 // GET CHARACTERS BY ID 
  getCharacters(params:any){
    return this.http.get(environment.baseUrl + environment.character, {params})


  }

  getCharacterById(id: String){
    return this.http.get(environment.baseUrl + environment.character + id)


  }

  getByUrl(url: string){

    return this.http.get(url)


  }
}