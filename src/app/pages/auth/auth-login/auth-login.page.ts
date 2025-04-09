import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonNavLink, IonButton, IonToast, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthRecoverPage } from '../auth-recover/auth-recover.page';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss'],
  standalone: true,
  imports: [IonToast, IonInput, IonButton, IonNavLink, IonContent, IonInputPasswordToggle, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthLoginPage implements OnInit {

  auth_recover = AuthRecoverPage

  formulario: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  showPassword: boolean = false
  togglePassword() {
    this.showPassword = !this.showPassword
  }

  onSubmit(): any {
    this.authService.login(this.formulario.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token)
      },
      error: (error) => {
        this.toastMessage = error.error.message
        this.setToastOpen(true)
      },
      complete: () => {
        this.router.navigate(['/main'])
      }
    })
  }

}
