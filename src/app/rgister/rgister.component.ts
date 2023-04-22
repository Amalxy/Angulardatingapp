import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rgister',
  templateUrl: './rgister.component.html',
  styleUrls: ['./rgister.component.css']
})
export class RgisterComponent {
  
  constructor(private router: Router) {}
  
  goto() {
    this.router.navigate(['/login']);
  }
}
