import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonCardHeader, IonIcon, IonButton, IonLabel, IonItem, IonCardContent, IonCardTitle, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonList, IonToggle, IonToast, IonText } from "@ionic/angular/standalone";
import { SesadmService } from 'src/app/services/sesadm.service';

@Component({
  selector: 'app-sesadm-user-change-roles',
  templateUrl: './sesadm-user-change-roles.component.html',
  styleUrls: ['./sesadm-user-change-roles.component.scss'],
  standalone: true,
  imports: [IonText, IonToast, IonToggle, IonList, IonContent, IonButtons, IonTitle, IonToolbar, IonHeader, IonModal, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon, IonCardHeader, IonCard, ]
})
export class SesadmUserChangeRolesComponent  implements OnInit {

  @Input() user: any
  @Output() updateUser = new EventEmitter<any>;

  constructor(
    private sesadmService: SesadmService
  ) { }

  ngOnInit() {
    this.getRoles()
  }

  roles: any
  getRoles() {
    this.sesadmService.getRoles('sesadm').subscribe({
      next: (response) => {
        this.roles = response
      }
    })
  }

  hasRole(roles: any, role: any) {
    let validate = false
    if (roles) {
      roles.forEach((element: any) => {
        if (element.id == role.id) {
          validate = true
        }
      });
      return validate
    } else {
      return false
    }
  }

  changeRoleToUser(role: any) {
    this.sesadmService.changeRoleToUser(role.id, this.user.id).subscribe()
  }

  isRolesModalOpen = false;
  setRolesModalOpen(isOpen: boolean) {
    this.isRolesModalOpen = isOpen;
    if (isOpen == false) {
      this.updateUser.emit()
    }
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
