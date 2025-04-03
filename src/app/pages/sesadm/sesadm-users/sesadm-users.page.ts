import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonIcon, IonText, IonButtons, IonBackButton, IonMenuButton, IonFab, IonFabButton, IonInput, IonModal, IonToast, IonSearchbar, IonItem, IonAvatar, IonRefresher, IonRefresherContent, IonLoading } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { SesadmService } from 'src/app/services/sesadm.service';
import { SesadmUserPage } from '../sesadm-user/sesadm-user.page';

@Component({
  selector: 'app-sesadm-users',
  templateUrl: './sesadm-users.page.html',
  styleUrls: ['./sesadm-users.page.scss'],
  standalone: true,
  imports: [IonLoading, IonRefresherContent, IonRefresher, IonAvatar, IonItem, IonSearchbar, IonToast, IonModal, IonInput, IonFabButton, IonFab, IonBackButton, IonButtons, IonText, IonIcon, IonButton, IonNavLink, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SesadmUsersPage implements OnInit {

  sesadm_user = SesadmUserPage

  createForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sesadmService: SesadmService,
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
    if (this.authService.create(this.createForm.value).subscribe()) {
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

}
