import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonToast, IonNavLink, IonInput, IonNav } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthResetPage } from '../auth-reset/auth-reset.page';

@Component({
  selector: 'app-auth-verification',
  templateUrl: './auth-verification.page.html',
  styleUrls: ['./auth-verification.page.scss'],
  standalone: true,
  imports: [IonNavLink, IonToast, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, CommonModule, FormsModule, ReactiveFormsModule, MaskitoDirective]
})
export class AuthVerificationPage implements OnInit {

  readonly maskitoOptions: MaskitoOptions = {
    mask: /^\d{1}$/,
  };

  formulario: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    one: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    two: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    three: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    four: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private nav: IonNav,
    private navParams: NavParams,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.formulario.patchValue({
      email: this.navParams.data['email']
    })
  }

  isToastOpen: boolean = false
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  onSubmit(): any {
    this.authService.checkVerificationCode(this.formulario.value).subscribe({
      error: (error) => {
        this.toastMessage = error.error.message
        this.setToastOpen(true)
      },
      complete: () => {
        this.nav.push(AuthResetPage, {
          email: this.formulario.value.email
        })
      }
    })
  }

  resendVerificationCode() {
    this.authService.sendVerificationCode(this.formulario.value).subscribe({
      next: (response) => {
        this.toastMessage = 'Código de verificação reenviado!'
        this.setToastOpen(true)
      },
    })
  }

}
