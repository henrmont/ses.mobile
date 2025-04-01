import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNav } from '@ionic/angular/standalone';
import { AuthMainPage } from '../auth-main/auth-main.page';

@Component({
  selector: 'app-auth-index',
  templateUrl: './auth-index.page.html',
  styleUrls: ['./auth-index.page.scss'],
  standalone: true,
  imports: [IonNav, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AuthIndexPage implements OnInit {

  index = AuthMainPage

  constructor() { }

  ngOnInit() {
  }

}
