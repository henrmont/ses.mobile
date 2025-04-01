import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth-mtlogin',
  templateUrl: './auth-mtlogin.page.html',
  styleUrls: ['./auth-mtlogin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AuthMtloginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
