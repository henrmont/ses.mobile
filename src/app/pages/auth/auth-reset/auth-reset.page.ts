import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavParams } from '@ionic/angular';
import { IonContent, IonToast, IonButton, IonInput, IonInputPasswordToggle, IonNav } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { AuthLoginPage } from '../auth-login/auth-login.page';

@Component({
  selector: 'app-auth-reset',
  templateUrl: './auth-reset.page.html',
  styleUrls: ['./auth-reset.page.scss'],
  standalone: true,
  imports: [IonButton, IonToast, IonContent, IonInput, IonInputPasswordToggle, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthResetPage implements OnInit {

  auth_login = AuthLoginPage

  formulario: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    npassword: [null, [Validators.required]],
    cpassword: [null, [Validators.required]]
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

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  showNPassword: boolean = false
  toggleNPassword() {
    this.showNPassword = !this.showNPassword
  }

  showCPassword: boolean = false
  toggleCPassword() {
    this.showCPassword = !this.showCPassword
  }

  onSubmit(): any {
    this.authService.resetPassword(this.formulario.value).subscribe({
      next: (response) => {
        this.toastMessage = response.message
        this.setToastOpen(true)
      },
      error: (error) => {
        this.toastMessage = error.error.message
        this.setToastOpen(true)
      },
      complete: () => {
        this.popToLogin()
      }
    })
  }

  popToLogin() {
    this.nav.popTo(1)
  }

  isValidPasswords: boolean = false
  checkPasswords() {
    if (this.formulario.value.npassword != this.formulario.value.cpassword) {
      this.isValidPasswords = false
    } else {
      this.isValidPasswords = true
    }
  }

}
