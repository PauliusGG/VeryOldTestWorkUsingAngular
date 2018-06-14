import { Injectable } from '@angular/core';
import { Observable, Subject, } from 'rxjs';
import { IItem } from './item.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _productUrl = '/assets/items.json'
  getItems(): Observable<IItem[]> {

    return this._http.get<IItem[]>(this._productUrl);
  }
  getItem(id:number): Observable<IItem>{
    return this._http.get<IItem>(this._productUrl)

  }

  constructor(private _http: HttpClient) { }
   
}

