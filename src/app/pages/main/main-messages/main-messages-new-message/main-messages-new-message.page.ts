import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonNav, IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonButtons, IonButton, IonIcon, IonMenuButton, IonBackButton, IonRefresher, IonRefresherContent, IonList } from '@ionic/angular/standalone';
import { MainMessagesNewChatComponent } from 'src/app/components/main/main-messages/main-messages-new-chat/main-messages-new-chat.component';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-messages-new-message',
  templateUrl: './main-messages-new-message.page.html',
  styleUrls: ['./main-messages-new-message.page.scss'],
  standalone: true,
  imports: [IonNav, IonList, IonRefresherContent, IonRefresher, IonBackButton, IonIcon, IonButton, IonButtons, IonFabButton, IonFab, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, MainMessagesNewChatComponent]
})
export class MainMessagesNewMessagePage implements OnInit {

  constructor(
    private mainService: MainService,
    private nav: IonNav
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  users: any
  getUsers() {
    this.mainService.getUsers().subscribe({
      next: (response) => {
        this.users = response
      }
    })
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getUsers()
      event.target.complete();
    }, 2000);
  }

  popToMessages() {
    this.nav.pop()
  }

}
