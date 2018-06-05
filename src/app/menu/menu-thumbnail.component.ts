import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/item.service';
@Component({
  selector: 'menu-thumbnail',
  templateUrl: './menu-thumbnail.component.html',
  styleUrls: ['./menu-thumbnail.component.css']
})
export class MenuThumbnailComponent implements OnInit {
   @Input() item: any

  constructor() { }

  ngOnInit() {
  }

}
