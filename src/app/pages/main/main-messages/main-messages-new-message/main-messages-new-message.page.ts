import { Component, OnInit } from '@angular/core';
import { IonNav, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonMenuButton, IonBackButton, IonRefresher, IonRefresherContent, IonList, IonLoading, IonSearchbar } from '@ionic/angular/standalone';
import { MainMessagesNewChatComponent } from 'src/app/components/main/main-messages-new-chat/main-messages-new-chat.component';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-messages-new-message',
  templateUrl: './main-messages-new-message.page.html',
  styleUrls: ['./main-messages-new-message.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonLoading, IonList, IonRefresherContent, IonRefresher, IonBackButton, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, MainMessagesNewChatComponent]
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
