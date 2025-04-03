import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonRouterOutlet, IonLabel, IonIcon, IonItem, IonItemDivider, IonNote, IonList, IonContent, IonMenu, IonMenuToggle, IonTabs, IonTabBar, IonTabButton, IonBadge } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { informationCircleOutline, shieldCheckmarkOutline, personOutline, checkmarkCircle, warning, logOutOutline, chatbubbles, notifications, home, apps, statsChart, add, caretBack, airplaneOutline, walletOutline, chevronForward, peopleOutline, close, eyeOffOutline, createOutline, settingsOutline, checkmarkCircleOutline, closeCircleOutline, arrowUp, send, notificationsOffOutline, cameraOutline, checkmark } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [IonBadge, IonTabButton, IonTabBar, IonTabs, IonContent, IonList, IonNote, IonItemDivider, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonMenu, IonMenuToggle, RouterModule]
})
export class MainLayoutComponent  implements OnInit {

  user = this.route.snapshot.data['user']

  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
  ) {
    addIcons({ informationCircleOutline, shieldCheckmarkOutline, personOutline, checkmarkCircle, warning, logOutOutline, chatbubbles, notifications, home, apps, statsChart, add, caretBack, airplaneOutline, walletOutline, chevronForward, peopleOutline, close, eyeOffOutline, createOutline, settingsOutline, checkmarkCircleOutline, closeCircleOutline, arrowUp, send, notificationsOffOutline, cameraOutline, checkmark })
  }

  ngOnInit() {
  }

  // get roles
  getRole(role: string) {
    let checkRole = false
    this.user.roles.forEach((element: any) => {
      if (element.name == role) {
        checkRole = true
      }
    })
    return checkRole
  }

  // get profile data
  // getProfile() {
  //   this.authService.me().subscribe({
  //     next: (response) => {
  //       this.user = response
  //     }
  //   })
  // }

  // logout system
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        window.localStorage.clear()
      },
      complete: () => {
        window.location.reload();
      }
    })
  }

}
