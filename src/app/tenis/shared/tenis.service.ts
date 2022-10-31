import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Tenis } from './tenis';

@Injectable({
  providedIn: 'root'
})
export class TenisService {
  urlBackend: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  public getTenis():Observable<Tenis[]> {
    return this.http.get<Tenis[]>(this.urlBackend+"/api/v1/tenis/");
  }
  
  public salvar (tenis:Tenis):Observable<Tenis>{
    if(!tenis.id){
      return this.http.post<Tenis>(this.urlBackend+"/api/v1/tenis/",tenis);
    }else{
      return this.http.patch<Tenis>(this.urlBackend+"/api/v1/tenis/"+tenis.id ,tenis);
    }
    
  }
  
  public getById (id:number):Observable<Tenis>{
    return this.http.get<Tenis>(this.urlBackend+"/api/v1/tenis/"+id);
  }
  
  public remover (id:number):Observable<Tenis>{
    return this.http.delete<Tenis>(this.urlBackend+"/api/v1/tenis/"+id);
  }
}
