import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonRouterOutlet, IonLabel, IonIcon, IonItem, IonItemDivider, IonNote, IonList, IonContent, IonMenu, IonMenuToggle, IonTabs, IonTabBar, IonTabButton, IonBadge, IonFabButton, IonFab, IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonChip, IonTitle } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { informationCircleOutline, shieldCheckmarkOutline, personOutline, checkmarkCircle, warning, logOutOutline, chatbubbles, notifications, home, apps, statsChart, add, caretBack, airplaneOutline, walletOutline, chevronForward, peopleOutline, close, eyeOffOutline, createOutline, settingsOutline, arrowUp, send, notificationsOffOutline, cameraOutline, checkmark, medkitOutline, cloudUploadOutline, calendarOutline, mapOutline, lockClosed, lockOpen, cashOutline, cash, shieldCheckmark } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [IonTitle, IonChip, IonButton, IonButtons, IonToolbar, IonHeader, IonModal, IonFab, IonFabButton, IonBadge, IonTabButton, IonTabBar, IonTabs, IonContent, IonList, IonNote, IonItemDivider, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonMenu, IonMenuToggle, RouterModule]
})
export class MainLayoutComponent  implements OnInit {

  user = this.route.snapshot.data['user']

  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private mainService: MainService
  ) {
    addIcons({ informationCircleOutline, shieldCheckmarkOutline, personOutline, checkmarkCircle, warning, logOutOutline, chatbubbles, notifications, home, apps, statsChart, add, caretBack, airplaneOutline, walletOutline, chevronForward, peopleOutline, close, eyeOffOutline, createOutline, settingsOutline, arrowUp, send, notificationsOffOutline, cameraOutline, checkmark, medkitOutline, cloudUploadOutline, calendarOutline, mapOutline, lockClosed, lockOpen, cashOutline, cash, shieldCheckmark })
  }

  ngOnInit() {
    this.checkModuleStatus()
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

  isChangeModuleModalOpen = false;
  setChangeModuleModalOpen(isOpen: boolean) {
    this.isChangeModuleModalOpen = isOpen;
  }

  changeModule(id: any) {
    this.mainService.changeModuleUser(id).subscribe({
      complete: () => {
        window.location.href = 'main'
      }
    })
  }

  checkModule(id: any): boolean {
    if (this.user.module_id == id) {
      return true
    }
    return false
  }

  moduleStatus = true
  checkModuleStatus() {
    this.mainService.getUserModule(this.user.module_id).subscribe({
      next: (response) => {
        const url = fetch(response.url, { method: 'GET', mode: 'no-cors' })
        url.then((res) => {
          this.moduleStatus = false
        })
      },
    })
  }

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
