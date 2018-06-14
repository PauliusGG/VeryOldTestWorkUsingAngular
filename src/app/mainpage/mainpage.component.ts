import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  goMenu(){
    this.router.navigate(['/items'])
  }

}
