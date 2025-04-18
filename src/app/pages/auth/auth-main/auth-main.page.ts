import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonNavLink } from '@ionic/angular/standalone';
import { AuthLoginPage } from '../auth-login/auth-login.page';
import { AuthMtloginPage } from '../auth-mtlogin/auth-mtlogin.page';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.page.html',
  styleUrls: ['./auth-main.page.scss'],
  standalone: true,
  imports: [IonNavLink, IonIcon, IonButton, IonContent]
})
export class AuthMainPage implements OnInit {

  login = AuthLoginPage
  mtlogin = AuthMtloginPage

  constructor() { }

  ngOnInit() {
  }

}
