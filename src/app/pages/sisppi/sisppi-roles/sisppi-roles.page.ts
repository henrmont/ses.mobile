import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonSearchbar, IonRefresher, IonRefresherContent, IonFab, IonFabButton, IonIcon, IonLoading, IonModal, IonInput, IonButton, IonToast, IonMenuButton } from '@ionic/angular/standalone';
import { SesadmService } from 'src/app/services/sesadm.service';
import { ActivatedRoute } from '@angular/router';
import { SesadmRolesRoleComponent } from 'src/app/components/sesadm/sesadm-roles-role/sesadm-roles-role.component';

const restrictRoles = [
  'sesadm/sesadm',
  'sesadm/sistfd',
  'sesadm/sisppi',
]

@Component({
  selector: 'app-sisppi-roles',
  templateUrl: './sisppi-roles.page.html',
  styleUrls: ['./sisppi-roles.page.scss'],
  standalone: true,
  imports: [IonToast, IonButton, IonModal, IonLoading, IonIcon, IonFabButton, IonFab, IonRefresherContent, IonRefresher, IonSearchbar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonMenuButton, CommonModule, FormsModule, ReactiveFormsModule, SesadmRolesRoleComponent]
})
export class SisppiRolesPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getRoles()
  }

  roles: any
  getRoles() {
    this.sesadmService.getRoles('sisppi').subscribe({
      next: (response) => {
        this.roles = response
      }
    })
  }

  createForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
  })

  isCreateModalOpen = false;
  setCreateModalOpen(isOpen: boolean) {
    this.createForm.patchValue({
      name: null
    })
    this.createForm.markAsUntouched()
    this.isCreateModalOpen = isOpen
  }

  onCreateSubmit(): any {
    this.createForm.patchValue({
      name: 'sisppi/'+this.createForm.get('name')?.value,
    })
    if (this.sesadmService.createRole('sisppi',this.createForm.value).subscribe()) {
      this.toastMessage = 'Regra criada com sucesso!'
      this.setCreateModalOpen(false)
      this.getRoles()
    } else {
      this.toastMessage = 'Erro ao criar regra'
    }
    this.setToastOpen(true)
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
      id: this.role['id'],
    })
    if (this.isUpdateModalOpen) {
      this.updateForm.patchValue({
        name: this.role['name'].split('/')[1],
      })
    } else {
      this.updateForm.patchValue({
        name: 'sisppi/'+this.updateForm.get('name')?.value,
      })
    }
  }

  role: any
  changeRole(item: any) {
    this.role = item
  }

  checkRestrictRole(role: any) {
    if (restrictRoles.includes(role)) {
      return false
    }
    return true
  }

  onUpdateSubmit(): any {
    this.updateForm.patchValue({
      name: 'sisppi/'+this.updateForm.get('name')?.value,
    })
    if (this.sesadmService.updateRole('sisppi',this.updateForm.value).subscribe()) {
      this.role['name'] = this.updateForm.get('name')?.value
      this.toastMessage = 'Regra editada com sucesso!'
      this.setUpdateModalOpen(false)
      this.getRoles()
    } else {
      this.toastMessage = 'Erro ao editar regra'
    }
    this.setToastOpen(true)
  }

  permissions: any
  getPermissions() {
    this.sesadmService.getPermissions('sisppi').subscribe({
      next: (response) => {
        this.permissions = response
      }
    })
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
        if (this.sesadmService.deleteRole('sisppi',this.role['id']).subscribe()) {
          this.toastMessage = 'Regra apagada com sucesso'
          this.setUpdateModalOpen(false)
          this.getRoles()
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

  handleRefresh(event: CustomEvent) {
    this.getRoles()
    setTimeout(() => {
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000)
  }

  changePermissionToRole(permission: any) {
    this.sesadmService.changePermissionToRole('sisppi', permission['id'], this.role['id']).subscribe()
  }

  inner_roles = this.route.snapshot.parent?.data['user'].roles
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
