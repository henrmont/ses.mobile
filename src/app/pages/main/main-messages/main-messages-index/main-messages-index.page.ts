import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonFab, IonFabButton, IonIcon, IonMenuButton, IonNavLink, IonList, IonLoading } from '@ionic/angular/standalone';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute } from '@angular/router';
import { MainMessagesChatComponent } from 'src/app/components/main/main-messages/main-messages-chat/main-messages-chat.component';
import { MainMessagesNewMessagePage } from '../main-messages-new-message/main-messages-new-message.page';

@Component({
  selector: 'app-main-messages-index',
  templateUrl: './main-messages-index.page.html',
  styleUrls: ['./main-messages-index.page.scss'],
  standalone: true,
  imports: [IonLoading,  IonList, IonNavLink, IonIcon, IonFabButton, IonFab, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, MainMessagesChatComponent ]
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
