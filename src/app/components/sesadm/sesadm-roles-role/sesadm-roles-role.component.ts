import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonItem, IonIcon, IonLabel, IonContent, IonInput, IonList, IonListHeader, IonToggle, IonButton, IonToast, IonAlert, IonButtons, IonModal, IonHeader, IonToolbar, IonTitle, IonText } from "@ionic/angular/standalone";
import { SesadmService } from 'src/app/services/sesadm.service';

const restrictRoles = [
  'sesadm/sesadm',
  'sesadm/sistfd',
  'sesadm/sisppi',
]

@Component({
  selector: 'app-sesadm-roles-role',
  templateUrl: './sesadm-roles-role.component.html',
  styleUrls: ['./sesadm-roles-role.component.scss'],
  standalone: true,
  imports: [IonText, IonTitle, IonToolbar, IonHeader, IonModal, IonButtons, IonAlert, IonToast, IonButton, IonToggle, IonListHeader, IonList, IonInput, IonContent, IonLabel, IonIcon, IonItem, IonInput, FormsModule, ReactiveFormsModule],
})
export class SesadmRolesRoleComponent  implements OnInit {

  @Input() role: any
  @Input() last: any
  @Input() module: any
  @Input() inner_roles: any

  constructor(
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService,
  ) { }

  ngOnInit() {
  }

  updateForm: FormGroup = this.formBuilder.group({
    id: [null, [Validators.required]],
    name: [null, [Validators.required]],
  })

  isUpdateModalOpen = false;
  setUpdateModalOpen(isOpen: boolean) {
    this.isUpdateModalOpen = isOpen
    this.getPermissions()
    this.updateForm.patchValue({
      id: this.role.id,
    })
    if (this.isUpdateModalOpen) {
      this.updateForm.patchValue({
        name: this.role.name.split('/')[1],
      })
    } else {
      this.updateForm.patchValue({
        name: this.module+'/'+this.updateForm.get('name')?.value,
      })
    }
  }

  checkRestrictRole(role: any) {
    if (restrictRoles.includes(role)) {
      return false
    }
    return true
  }

  onUpdateSubmit(): any {
    this.updateForm.patchValue({
      name: this.module+'/'+this.updateForm.get('name')?.value,
    })
    if (this.sesadmService.updateRole(this.module, this.updateForm.value).subscribe()) {
      this.role.name = this.updateForm.get('name')?.value
      this.toastMessage = 'Regra editada com sucesso!'
      this.setUpdateModalOpen(false)
    } else {
      this.toastMessage = 'Erro ao editar regra'
    }
    this.setToastOpen(true)
  }

  permissions: any
  getPermissions() {
    this.sesadmService.getPermissions(this.module).subscribe({
      next: (response) => {
        this.permissions = response
      }
    })
  }

  havePermission(roles: any, role: any) {
    let validate = false
    roles.forEach((element: any) => {
      if (element.id == role.id) {
        validate = true
      }
    });
    return validate
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen
  }

  isAlertOpen = false;
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Apagar',
      role: 'confirm',
      handler: () => {
        if (this.sesadmService.deleteRole(this.module, this.role.id).subscribe()) {
          this.toastMessage = 'Regra apagada com sucesso'
          this.setUpdateModalOpen(false)
        } else {
          this.toastMessage = 'Erro ao apagar regra'
        }
        this.setToastOpen(true)
      },
    },
  ];
  setAlertOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen
  }

  changePermissionToRole(permission: any) {
    this.sesadmService.changePermissionToRole(this.module, permission['id'], this.role['id']).subscribe()
  }

  hasPermission(permission: any) {
    for (const element of this.inner_roles) {
      for (const perm of element.permissions) {
        if (perm.name == permission) {
          return true;
        }
      }
    }
    return false;
  }

}
