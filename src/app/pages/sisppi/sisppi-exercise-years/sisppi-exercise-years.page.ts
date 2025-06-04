import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButtons, IonBackButton, IonSearchbar, IonRefresher, IonRefresherContent, IonFab, IonFabButton, IonIcon, IonLoading, IonNavLink, IonItem, IonAvatar, IonModal, IonButton, IonMenuButton, IonInput, IonText } from '@ionic/angular/standalone';
import { SisppiService } from 'src/app/services/sisppi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sisppi-exercise-years',
  templateUrl: './sisppi-exercise-years.page.html',
  styleUrls: ['./sisppi-exercise-years.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonModal, IonAvatar, IonItem, IonNavLink, IonLoading, IonIcon, IonFabButton, IonFab, IonRefresherContent, IonRefresher, IonSearchbar, IonBackButton, IonButtons, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SisppiExerciseYearsPage implements OnInit {

  createForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private sisppiService: SisppiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getExerciseYears()
  }

  exercise_years: any
  getExerciseYears() {
    this.sisppiService.getExerciseYears().subscribe({
      next: (response) => {
        console.log(response)
        this.exercise_years = response
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
    if (this.sisppiService.createExerciseYear(this.createForm.value).subscribe()) {
      this.toastMessage = 'Ano de exercício criado com sucesso!'
      this.setCreateModalOpen(false)
      this.getExerciseYears()
    } else {
      this.toastMessage = 'Erro ao criar ano de exercício'
    }
    this.setToastOpen(true)
  }

  handleRefresh(event: CustomEvent) {
    this.getExerciseYears()
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
