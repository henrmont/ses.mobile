import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRefresher, IonSearchbar, IonMenuButton, IonFabButton, IonRefresherContent, IonFab, IonIcon, IonItem, IonNavLink, IonAvatar, IonLoading, IonModal, IonButton, IonToast, IonInput, IonText } from '@ionic/angular/standalone';
import { SisppiUserPage } from '../sisppi-user/sisppi-user.page';
import { SisppiService } from 'src/app/services/sisppi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sisppi-users',
  templateUrl: './sisppi-users.page.html',
  styleUrls: ['./sisppi-users.page.scss'],
  standalone: true,
  imports: [IonText, IonToast, IonButton, IonModal, IonLoading, IonAvatar, IonNavLink, IonItem, IonIcon, IonFab, IonRefresherContent, IonFabButton, IonSearchbar, IonRefresher, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SisppiUsersPage implements OnInit {

  sisppi_user = SisppiUserPage

  createForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private sisppiService: SisppiService,
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
    this.sisppiService.getUsers().subscribe({
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
    if (this.sisppiService.createModuleUser(this.createForm.value).subscribe()) {
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
