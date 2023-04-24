import { Component } from '@angular/core';
import { Router, Navigation, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})

export class Home2Component {
  constructor(private router: Router) {}

  goto1() {
   
    this.router.navigate(['./home']);
  }
 
}
