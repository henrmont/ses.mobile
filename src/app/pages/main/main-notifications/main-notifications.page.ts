import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent, IonList, IonIcon, IonLoading } from '@ionic/angular/standalone';
import { MainNotificationsNotificationComponent } from 'src/app/components/main/main-notifications-notification/main-notifications-notification.component';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-notifications',
  templateUrl: './main-notifications.page.html',
  styleUrls: ['./main-notifications.page.scss'],
  standalone: true,
  imports: [IonLoading, IonIcon, IonList, IonRefresherContent, IonRefresher, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, MainNotificationsNotificationComponent]
})
export class MainNotificationsPage implements OnInit {

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getNotifications()
  }

  ionViewWillEnter() {
    this.getNotifications()
  }

  notifications: any
  getNotifications() {
    this.mainService.getNotifications().subscribe({
      next: (response) => {
        this.notifications = response
      }
    })
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getNotifications()
      event.target.complete();
    }, 2000);
  }

  removeNotification(item: any) {
    this.mainService.deleteNotification(item.id).subscribe()
    let index: number = this.notifications.indexOf(item);
    if (index !== -1) {
      setTimeout(() => {
        this.notifications.splice(index, 1);
      }, 100)
    }
  }

}
