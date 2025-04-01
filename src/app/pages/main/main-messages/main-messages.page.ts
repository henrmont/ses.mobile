import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonFab, IonFabButton, IonIcon, IonNav } from '@ionic/angular/standalone';
import { MainMessagesNewMessagePage } from './main-messages-new-message/main-messages-new-message.page';
import { MainMessagesIndexPage } from './main-messages-index/main-messages-index.page';

@Component({
  selector: 'app-main-messages',
  templateUrl: './main-messages.page.html',
  styleUrls: ['./main-messages.page.scss'],
  standalone: true,
  imports: [IonNav, IonIcon, IonFabButton, IonFab, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class MainMessagesPage implements OnInit {

  index = MainMessagesIndexPage

  constructor(
  ) { }

  ngOnInit() {
  }

}
