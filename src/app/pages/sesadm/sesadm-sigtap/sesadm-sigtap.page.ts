import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonSearchbar, IonMenuButton, IonRefresher, IonRefresherContent, IonFab, IonFabButton, IonIcon, IonLoading, IonToast, IonNavLink, IonItem, IonAvatar, IonText } from '@ionic/angular/standalone';
import { SesadmService } from 'src/app/services/sesadm.service';
import { SesadmProceduresPage } from '../sesadm-procedures/sesadm-procedures.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sesadm-sigtap',
  templateUrl: './sesadm-sigtap.page.html',
  styleUrls: ['./sesadm-sigtap.page.scss'],
  standalone: true,
  imports: [IonText, IonAvatar, IonItem, IonNavLink, IonToast, IonLoading, IonIcon, IonFabButton, IonFab, IonRefresherContent, IonRefresher, IonSearchbar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class SesadmSigtapPage implements OnInit {

  sesadm_procedures = SesadmProceduresPage

  @ViewChild('sigtap') sigtap!: ElementRef
  loading: boolean = true

  constructor(
    private sesadmService: SesadmService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCompetences()
  }

  competences: any
  getCompetences() {
    this.sesadmService.getCompetences().subscribe({
      next: (response) => {
        this.competences = response
      },
      complete: () => {
        this.loading = false
      }
    })
  }

  selectSigtap() {
    this.sigtap.nativeElement.click()
  }

  file!:File
  onFileChange(event: any) {
    this.loading = true
    if (event.target.files.length > 0 && event.target.files[0].type == 'application/x-zip-compressed') {
      this.file = event.target.files[0];
      this.sesadmService.process(this.file).subscribe({
        next: (response) => {
          this.setToastOpen(true)
          this.toastMessage = response.message
          this.loading = false
        },
        error: (error) => {
          this.setToastOpen(true)
          this.toastMessage = error.error.message
          this.loading = false
        },
        complete: () => {
          this.getCompetences()
        }
      })
    }
  }

  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
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
