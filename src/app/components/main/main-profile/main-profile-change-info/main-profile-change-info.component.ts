import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonIcon, IonModal, IonHeader, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonButton, IonButtons, IonTitle, IonContent, IonInput, IonToast } from "@ionic/angular/standalone";
import { AuthService } from 'src/app/services/auth.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-profile-change-info',
  templateUrl: './main-profile-change-info.component.html',
  styleUrls: ['./main-profile-change-info.component.scss'],
  standalone: true,
  imports: [IonToast, IonInput, IonContent, IonTitle, IonButtons, IonButton, IonLabel, IonItem, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonInput, IonIcon, IonModal, IonHeader, IonToolbar, IonCard, FormsModule, ReactiveFormsModule]
})
export class MainProfileChangeInfoComponent  implements OnInit {

  @Input() user: any
  @Output() update = new EventEmitter<any>

  changeInfoForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.changeInfoForm.patchValue({
      name: this.user.name,
    })
    this.getUser()
  }

  getUser() {
    this.authService.me().subscribe({
      next: (response) => {
        this.user = response
      }
    })
  }

  // modal open
  isChangeInfoModalOpen = false;
  setChangeInfoModalOpen(isOpen: boolean) {
    this.isChangeInfoModalOpen = isOpen;
  }

  onChangeInfoSubmit(): any {
    if (this.mainService.changeInfo(this.changeInfoForm.value).subscribe()) {
      this.toastMessage = 'Usuário atualizado com sucesso!'
      this.setChangeInfoModalOpen(false)
      this.getUser()
    } else {
      this.toastMessage = 'Erro ao atualizar usuário'
    }
    this.setToastOpen(true)
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
