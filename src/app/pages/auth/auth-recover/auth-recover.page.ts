import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonButton, IonNavLink, IonToast, IonInput, IonNav } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { AuthVerificationPage } from '../auth-verification/auth-verification.page';

@Component({
  selector: 'app-auth-recover',
  templateUrl: './auth-recover.page.html',
  styleUrls: ['./auth-recover.page.scss'],
  standalone: true,
  imports: [IonToast, IonNavLink, IonButton, IonContent, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthRecoverPage implements OnInit {

  formulario: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private nav: IonNav
  ) {}

  ngOnInit() {
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  onSubmit(): any {
    this.authService.sendVerificationCode(this.formulario.value).subscribe({
      next: (response) => {
        this.toastMessage = response.message
        this.setToastOpen(true)
      },
      error: (error) => {
        this.toastMessage = error.error.message
        this.setToastOpen(true)
      },
      complete: () => {
        this.nav.push(AuthVerificationPage, {
          email: this.formulario.value.email
        })
      }
    })
  }

}
