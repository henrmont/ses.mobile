import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonButton, IonIcon, IonLabel, IonItem, IonCardContent, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonList, IonContent, IonToggle, IonToast } from "@ionic/angular/standalone";
import { SesadmService } from 'src/app/services/sesadm.service';

@Component({
  selector: 'app-sesadm-user-change-modules',
  templateUrl: './sesadm-user-change-modules.component.html',
  styleUrls: ['./sesadm-user-change-modules.component.scss'],
  standalone: true,
  imports: [IonToast, IonToggle, IonContent, IonList, IonButtons, IonTitle, IonToolbar, IonHeader, IonModal, IonCardContent, IonItem, IonLabel, IonIcon, IonButton, IonCardTitle, IonCardHeader, IonCard, ]
})
export class SesadmUserChangeModulesComponent  implements OnInit {

  @Input() user: any
  @Output() updateUser = new EventEmitter<any>;

  constructor(
    private sesadmService: SesadmService
  ) { }

  ngOnInit() {
    this.getModules()
  }

  isModulesModalOpen = false;
  setModulesModalOpen(isOpen: boolean) {
    this.isModulesModalOpen = isOpen;
    if (isOpen == false) {
      this.updateUser.emit()
    }
  }

  modules: any
  getModules() {
    this.sesadmService.getModules().subscribe({
      next: (response) => {
        this.modules = response
      },
    })
  }

  checkUserModule(module: any) {
    let userModule = false
    this.user.modules.forEach((element: any) => {
      if (element.module_id == module.id) {
        userModule = true
      }
    });
    return userModule
  }

  changeUserModule(module_id: any) {
    this.sesadmService.changeUserModule(module_id, this.user.id).subscribe()
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
