import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonText, IonButton, IonIcon, IonCardContent, IonCardTitle, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonInput, IonToast } from "@ionic/angular/standalone";
import { SesadmService } from 'src/app/services/sesadm.service';

@Component({
  selector: 'app-sesadm-user-change-info',
  templateUrl: './sesadm-user-change-info.component.html',
  styleUrls: ['./sesadm-user-change-info.component.scss'],
  standalone: true,
  imports: [IonToast, IonInput, IonContent, IonButtons, IonTitle, IonToolbar, IonHeader, IonModal, IonCard, IonCardTitle, IonCardContent, IonIcon, IonButton, IonText, IonLabel, IonItem, IonCardHeader, FormsModule, ReactiveFormsModule]
})
export class SesadmUserChangeInfoComponent  implements OnInit {

  @Input() user: any
  @Output() updateUser = new EventEmitter<any>;

  constructor(
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService
  ) { }

  ngOnInit() {}

  updateForm: FormGroup = this.formBuilder.group({
    id: [null, [Validators.required]],
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  })

  isUpdateModalOpen = false;
  setUpdateModalOpen(isOpen: boolean) {
    this.isUpdateModalOpen = isOpen
    this.updateForm.patchValue({
      id: this.user.id,
      name: this.user.name,
      email: this.user.email
    })
  }

  onUpdateSubmit(): any {
    if (this.sesadmService.changeInfoUser(this.updateForm.value).subscribe()) {
      this.toastMessage = 'Usuário atualizado com sucesso!'
      this.updateUser.emit()
      this.setUpdateModalOpen(false)
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
