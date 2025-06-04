import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemOptions, IonItemOption, IonItemSliding, IonItem, IonAvatar, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-main-notifications-notification',
  templateUrl: './main-notifications-notification.component.html',
  styleUrls: ['./main-notifications-notification.component.scss'],
  standalone: true,
  imports: [IonText, IonAvatar, IonItem, IonItemSliding, IonItemOption, IonItemOptions, ]
})
export class MainNotificationsNotificationComponent  implements OnInit {

  @Input() notification: any
  @Output() removeNotificationEvent = new EventEmitter<any>;

  constructor() { }

  ngOnInit() {}

  // remove event to parent
  removeNotification(item: any) {
    item.getSlidingRatio().then((res: any) => {
      if (res == -1) {
        item.close()
        this.removeNotificationEvent.emit(this.notification)
      }
    })
  }

}
