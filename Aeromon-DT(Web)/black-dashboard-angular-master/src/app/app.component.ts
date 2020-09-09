import { Component } from '@angular/core';
import { UserService } from './user.service';
import { MapsService } from './maps.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signInCheck = false;
  logInCheck = true;




  title = 'black-dashboard-angular';
  lat: string = '33.628208 ';
  lng: string = '-184.90161 ';
  email: string = "email@example.com";
  password: string = "12345";
  Location: Object;



  constructor(public user: UserService, private map: MapsService) { }


  logIn() {
    this.user.sign(this.email, this.password);
  }


  emailGet(event: any) {
    this.email = event.target.value;
    console.log(this.email);
  }



  passGet(event: any) {
    this.password = event.target.value;
    console.log(this.password);
  }


  gotoSignUp() {
    this.signInCheck = true;
    this.logInCheck = false;
    console.log("Go to Sign Up Tab\n");
  }

  signUp() {
    this.user.log(this.email, this.password);
    console.log("Sign Up");

  }

  gotoLogin() {
    this.logInCheck = true;
    this.signInCheck = false;
    console.log("GO to login tab");
  }
}
