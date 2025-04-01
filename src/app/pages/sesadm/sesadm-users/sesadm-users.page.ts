import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonIcon, IonText, IonButtons, IonBackButton, IonMenuButton, IonFab, IonFabButton, IonInput, IonModal, IonToast, IonSearchbar, IonItem, IonAvatar, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { SesadmService } from 'src/app/services/sesadm.service';
import { SesadmUserPage } from '../sesadm-user/sesadm-user.page';

@Component({
  selector: 'app-sesadm-users',
  templateUrl: './sesadm-users.page.html',
  styleUrls: ['./sesadm-users.page.scss'],
  standalone: true,
  imports: [IonRefresherContent, IonRefresher, IonAvatar, IonItem, IonSearchbar, IonToast, IonModal, IonInput, IonFabButton, IonFab, IonBackButton, IonButtons, IonText, IonIcon, IonButton, IonNavLink, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SesadmUsersPage implements OnInit {

  sesadm_user = SesadmUserPage

  formulario: FormGroup = this.formBuilder.group({
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

  isModalOpen = false;
  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  onSubmit(): any {
    this.authService.create(this.formulario.value).subscribe({
      next: (response) => {
        this.toastMessage = response.message
        this.setToastOpen(true)
      },
      error: (error) => {
        this.toastMessage = error.error.message
        this.setToastOpen(true)
      },
      complete: () => {
        this.setModalOpen(false)
        this.getUsers()
      }
    })
  }

  users: any
  getUsers() {
    this.sesadmService.getUsers().subscribe({
      next: (response) => {
        this.users = response
      }
    })
  }

  handleRefresh(event: CustomEvent) {
    this.getUsers()
    setTimeout(() => {
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000)
  }

}
