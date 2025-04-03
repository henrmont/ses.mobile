import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular';
import { SesadmService } from 'src/app/services/sesadm.service';
import { SesadmUserChangeValidComponent } from 'src/app/components/sesadm/sesadm-user-change-valid/sesadm-user-change-valid.component';
import { SesadmUserChangeInfoComponent } from 'src/app/components/sesadm/sesadm-user-change-info/sesadm-user-change-info.component';
import { SesadmUserChangeModulesComponent } from 'src/app/components/sesadm/sesadm-user-change-modules/sesadm-user-change-modules.component';
import { SesadmUserChangeRolesComponent } from 'src/app/components/sesadm/sesadm-user-change-roles/sesadm-user-change-roles.component';

@Component({
  selector: 'app-sesadm-user',
  templateUrl: './sesadm-user.page.html',
  styleUrls: ['./sesadm-user.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, SesadmUserChangeValidComponent, SesadmUserChangeInfoComponent, SesadmUserChangeModulesComponent, SesadmUserChangeRolesComponent]
})
export class SesadmUserPage implements OnInit {

  constructor(
    private navParams: NavParams,
    private sesadmService: SesadmService
  ) { }

  ngOnInit() {
    this.getRoles()
  }

  user: any = this.navParams.data
  getUser() {
    this.sesadmService.getUser(this.user.id).subscribe({
      next: (response) => {
        this.user = response
      }
    })
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
    roles.forEach((element: any) => {
      if (element.id == role.id) {
        validate = true
      }
    });
    return validate
  }

  changeRoleToUser(role: any) {
    this.sesadmService.changeRoleToUser(role['id'], this.user['id']).subscribe()
  }

  isRolesModalOpen = false;
  setRolesModalOpen(isOpen: boolean) {
    this.isRolesModalOpen = isOpen;
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
