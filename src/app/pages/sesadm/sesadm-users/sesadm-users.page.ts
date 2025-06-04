import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonIcon, IonButtons, IonBackButton, IonMenuButton, IonFab, IonFabButton, IonInput, IonModal, IonToast, IonSearchbar, IonItem, IonAvatar, IonRefresher, IonRefresherContent, IonLoading, IonText } from '@ionic/angular/standalone';
import { SesadmService } from 'src/app/services/sesadm.service';
import { SesadmUserPage } from '../sesadm-user/sesadm-user.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sesadm-users',
  templateUrl: './sesadm-users.page.html',
  styleUrls: ['./sesadm-users.page.scss'],
  standalone: true,
  imports: [IonText, IonLoading, IonRefresherContent, IonRefresher, IonAvatar, IonItem, IonSearchbar, IonToast, IonModal, IonInput, IonFabButton, IonFab, IonBackButton, IonButtons, IonIcon, IonButton, IonNavLink, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SesadmUsersPage implements OnInit {

  sesadm_user = SesadmUserPage

  createForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  ionViewWillEnter() {
    this.getUsers()
  }

  users: any
  getUsers() {
    this.sesadmService.getUsers().subscribe({
      next: (response) => {
        this.users = response
      }
    })
  }

  isCreateModalOpen = false;
  setCreateModalOpen(isOpen: boolean) {
    this.isCreateModalOpen = isOpen;
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  onCreateSubmit(): any {
    if (this.sesadmService.create(this.createForm.value).subscribe()) {
      this.toastMessage = 'Usuário criado com sucesso!'
      this.setCreateModalOpen(false)
      this.getUsers()
    } else {
      this.toastMessage = 'Erro ao criar usuário'
    }
    this.setToastOpen(true)
  }

  handleRefresh(event: CustomEvent) {
    this.getUsers()
    setTimeout(() => {
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000)
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
