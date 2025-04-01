import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonText, IonIcon, IonToggle, IonLabel, IonButton, IonToast, IonModal, IonCheckbox, IonNav, IonNavLink, IonInput, IonListHeader } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular';
import { SesadmService } from 'src/app/services/sesadm.service';

@Component({
  selector: 'app-sesadm-user',
  templateUrl: './sesadm-user.page.html',
  styleUrls: ['./sesadm-user.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonNavLink, IonNav, IonCheckbox, IonModal, IonToast, IonButton, IonLabel, IonToggle, IonIcon, IonText, IonItem, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SesadmUserPage implements OnInit {

  updateForm: FormGroup = this.formBuilder.group({
    id: [null, [Validators.required]],
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService
  ) { }

  ngOnInit() {
    this.getUser()
    this.getModules()
    this.getRoles()
  }

  user: any = this.navParams.data
  getUser() {
    this.sesadmService.getUser(this.user['id']).subscribe({
      next: (response) => {
        this.user = response
      }
    })
  }

  changeValidUser() {
    this.sesadmService.changeValidUser(this.user['id']).subscribe()
  }

  isUpdateModalOpen = false;
  setUpdateModalOpen(isOpen: boolean) {
    this.isUpdateModalOpen = isOpen
    this.updateForm.patchValue({
      id: this.user['id'],
      name: this.user['name'],
      email: this.user['email']
    })
    this.getUser()
  }

  onUpdateSubmit(): any {
    if (this.sesadmService.changeInfoUser(this.updateForm.value).subscribe()) {
      this.toastMessage = 'Usuário atualizado com sucesso!'
      this.setUpdateModalOpen(false)
      this.getUser()
    } else {
      this.toastMessage = 'Erro ao atualizar usuário'
    }
    this.setToastOpen(true)
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
    this.user['modules'].forEach((element: any) => {
      if (element.module_id == module.id) {
        userModule = true
      }
    });
    return userModule
  }

  changeUserModule(module_id: any) {
    this.sesadmService.changeUserModule(module_id, this.user['id']).subscribe()
  }

  isModulesModalOpen = false;
  setModulesModalOpen(isOpen: boolean) {
    this.isModulesModalOpen = isOpen;
    this.getUser()
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
    this.getUser()
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
