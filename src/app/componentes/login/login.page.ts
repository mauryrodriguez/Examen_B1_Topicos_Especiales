import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authservice.login(this.email, this.password).then(res =>{
        this.router.navigate(['/home']);
        console.log('estas dentro')
    }).catch(err => alert('usuario o contraseñincorrctos'))
  }
}
