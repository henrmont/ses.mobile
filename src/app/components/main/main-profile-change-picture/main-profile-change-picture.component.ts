import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent, LoadedImage } from 'ngx-image-cropper';
import { IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonFab, IonFabButton, IonIcon, IonTitle, IonContent, IonToast } from "@ionic/angular/standalone";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-profile-change-picture',
  templateUrl: './main-profile-change-picture.component.html',
  styleUrls: ['./main-profile-change-picture.component.scss'],
  standalone: true,
  imports: [IonToast, IonContent, IonTitle, IonIcon, IonFabButton, IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonFab, ImageCropperComponent, FormsModule, ReactiveFormsModule]
})
export class MainProfileChangePictureComponent  implements OnInit {

  @Input() user: any
  @ViewChild('picture') picture!: ElementRef
  @Output() update = new EventEmitter<any>

  imageChangedEvent: any
  croppedImage: any

  changePictureForm: FormGroup = this.formBuilder.group({
    picture: [null, [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  getUser() {
    this.authService.me().subscribe({
      next: (response) => {
        this.user = response
      }
    })
  }

  selectPicture() {
    this.picture.nativeElement.click()
  }

  // modal open
  isChangePictureModalOpen = false;
  setChangePictureModalOpen(isOpen: boolean) {
    this.isChangePictureModalOpen = isOpen;
  }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event
  }

  imageCropped(event: ImageCroppedEvent) {
    this.changePictureForm.patchValue({picture:event.base64})
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }

  onChangePictureSubmit(): any {
    if (this.mainService.changePicture(this.changePictureForm.value).subscribe()) {
      this.toastMessage = 'Usuário atualizado com sucesso!'
      this.setChangePictureModalOpen(false)
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
