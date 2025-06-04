import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonRefresher, IonFab, IonFabButton, IonIcon, IonRefresherContent, IonNavLink, IonItem, IonText, IonLoading, IonToast, IonMenuButton } from '@ionic/angular/standalone';
import { SisppiProceduresPage } from '../sisppi-procedures/sisppi-procedures.page';
import { ActivatedRoute } from '@angular/router';
import { SisppiService } from 'src/app/services/sisppi.service';

@Component({
  selector: 'app-sisppi-competences',
  templateUrl: './sisppi-competences.page.html',
  styleUrls: ['./sisppi-competences.page.scss'],
  standalone: true,
  imports: [IonToast, IonLoading, IonText, IonItem, IonNavLink, IonRefresherContent, IonIcon, IonFabButton, IonFab, IonRefresher, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class SisppiCompetencesPage implements OnInit {

  sisppi_procedures = SisppiProceduresPage

  loading: boolean = true

  constructor(
    private sisppiService: SisppiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCompetences()
  }

  competences: any
  getCompetences() {
    this.sisppiService.getCompetences().subscribe({
      next: (response) => {
        this.competences = response
      },
      complete: () => {
        this.loading = false
      }
    })
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
