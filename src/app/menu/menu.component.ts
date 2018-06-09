import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { IItem } from '../shared/item.model';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items:IItem[]
  constructor(private itemService: ItemService) {
   }
  ngOnInit(): void {
    this.itemService.getItems()
          .subscribe(
            item => {this.items = item})
  }

}
