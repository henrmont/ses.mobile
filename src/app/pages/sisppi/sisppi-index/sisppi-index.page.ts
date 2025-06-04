import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonLabel, IonGrid, IonRow, IonCol, IonNavLink, IonButton, IonText, IonIcon } from '@ionic/angular/standalone';
import { SisppiCountiesPage } from '../sisppi-counties/sisppi-counties.page';
import { ActivatedRoute } from '@angular/router';
import { SisppiUsersPage } from '../sisppi-users/sisppi-users.page';
import { SisppiRolesPage } from '../sisppi-roles/sisppi-roles.page';
import { SisppiCompetencesPage } from '../sisppi-competences/sisppi-competences.page';
import { SisppiExerciseYearsPage } from '../sisppi-exercise-years/sisppi-exercise-years.page';

@Component({
  selector: 'app-sisppi-index',
  templateUrl: './sisppi-index.page.html',
  styleUrls: ['./sisppi-index.page.scss'],
  standalone: true,
  imports: [IonIcon, IonText, IonButton, IonNavLink, IonCol, IonRow, IonGrid, IonLabel, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class SisppiIndexPage implements OnInit {

  sisppi_users = SisppiUsersPage
  sisppi_roles = SisppiRolesPage
  sisppi_counties = SisppiCountiesPage
  sisppi_competences = SisppiCompetencesPage
  sisppi_exercise_years = SisppiExerciseYearsPage

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
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
