import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IItem } from './item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems(): Observable<IItem[]>{
    let subject = new Subject<IItem[]>()
    setTimeout(() => {subject.next(this.ITEMS); subject.complete();},1000)

    return subject
  }

  constructor() { }
   ITEMS: IItem[] = [
    {
      id: 1,
      name: 'Black Coffee',
      strong: 'Yes',
      price: 3.20
    },
    {
      id: 2,
      name: 'White Coffee',
      strong: 'Yes',
      price: 4.20
  
    },
    {
      id: 3,
      name: 'Brown Coffee',
      strong: 'maybe',
      price: 44
    }
  ]
  
}

