import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { IItem } from '../shared/item.model';
@Component({
  selector: 'item-thumbnail',
  templateUrl: './item-thumbnail.component.html',
  styleUrls: ['./item-thumbnail.component.scss']
})
export class ItemThumbnailComponent implements OnInit {
   @Input() item: IItem

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
