import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  goMain(){
    this.router.navigate(['/home'])
  }
  register(){
    this.router.navigate(['/user/register'])
  }
  notWorking(){
    window.alert('I want it to work too...')
    this.router.navigate(['/home'])
  }

}
