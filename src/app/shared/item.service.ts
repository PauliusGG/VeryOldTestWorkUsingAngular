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
      name: 'Espresso',
      sizes: 'Small , Medium',
      price: 3.20,
      imageUrl: 'https://www.kickinghorsecoffee.com/sites/default/files/styles/primary_page_regular_mobile/public/images/caffeine_espresso_vs_drip.jpg?itok=4J6IOel_'
    },
    {
      id: 2,
      name: 'Double Espresso (Dopio)',
      sizes: 'Small, Medium, Large, Extra Large',
      price: 4.20,
      imageUrl: 'https://coffee-channel.com/wp-content/uploads/2017/05/espresso-691231_640.jpg'
  
    },
    {
      id: 3,
      name: 'Long Black Americano',
      sizes: 'Medium',
      price: 44,
      imageUrl: 'https://www.nespresso.com/ncp/res/resized/w1920/uploads/recipes/Americano%20by%20Nespresso.jpg'
    },
    {
      id: 4,
      name: 'Latte',
      sizes: 'Small, Medium, Large',
      price: 2.80,
      imageUrl: 'https://image.freepik.com/free-photo/latte-coffee-cup_1203-3395.jpg'
    }
  ]
  
}

