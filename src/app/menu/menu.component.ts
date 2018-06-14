import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { IItem } from '../shared/item.model';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  filteredList: IItem[]




  @Input()items:IItem[]
  constructor(private itemService: ItemService) {
   }
  ngOnInit(): void {
    this.itemService.getItems()
          .subscribe(
            item => {this.items = item})
  }
  add(){
    window.alert('Not implemented yet')
  }
 


}
