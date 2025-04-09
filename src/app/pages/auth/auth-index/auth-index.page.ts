import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { AuthMainPage } from '../auth-main/auth-main.page';

@Component({
  selector: 'app-auth-index',
  templateUrl: './auth-index.page.html',
  styleUrls: ['./auth-index.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class AuthIndexPage implements OnInit {

  index = AuthMainPage

  constructor() { }

  ngOnInit() {
  }

}
