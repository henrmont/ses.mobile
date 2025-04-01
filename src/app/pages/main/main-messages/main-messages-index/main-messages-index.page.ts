import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonFab, IonFabButton, IonIcon, IonMenuButton, IonNav, IonNavLink, IonList, IonItem, IonAvatar, IonNote, IonModal, IonButton, IonListHeader, IonLabel, IonToggle, IonChip, IonText, IonFooter, IonInput, IonSearchbar, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute } from '@angular/router';
import { MainMessagesChatComponent } from 'src/app/components/main/main-messages/main-messages-chat/main-messages-chat.component';
import { MainMessagesNewChatComponent } from 'src/app/components/main/main-messages/main-messages-new-chat/main-messages-new-chat.component';
import { MainMessagesNewMessagePage } from '../main-messages-new-message/main-messages-new-message.page';

@Component({
  selector: 'app-main-messages-index',
  templateUrl: './main-messages-index.page.html',
  styleUrls: ['./main-messages-index.page.scss'],
  standalone: true,
  imports: [IonRefresherContent, IonRefresher, IonSearchbar, IonFooter, IonText, IonChip, IonToggle, IonLabel, IonListHeader, IonButton, IonModal, IonNote, IonAvatar, IonItem, IonList, IonNavLink, IonNav, IonIcon, IonFabButton, IonFab, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonInput, CommonModule, FormsModule, ReactiveFormsModule, MainMessagesChatComponent, MainMessagesNewChatComponent]
})
export class MainMessagesIndexPage implements OnInit {

  main_messages_new_message = MainMessagesNewMessagePage

  channel: any
  user = this.route.snapshot.parent?.data['user']

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getChats()
  }

  chats: any
  getChats() {
    this.mainService.getChats().subscribe({
      next: (response) => {
        this.chats = response
      }
    })
  }

}
