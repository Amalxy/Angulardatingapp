
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, MinValidator } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';


import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
  ngOnInit() {
    const input = document.querySelector('#phone') as HTMLInputElement;
    intlTelInput(input, {
        utilsScript: 'node_modules/intl-tel-input/build/js/utils.js'
    });

} 
constructor(private router: Router) {}
goto() {
  this.router.navigate(['./otp']);
}

}
