import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonSearchbar, IonMenuButton, IonLoading, IonList, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular';
import { SesadmService } from 'src/app/services/sesadm.service';
import { SesadmProceduresProcedureComponent } from 'src/app/components/sesadm/sesadm-procedures-procedure/sesadm-procedures-procedure.component';

@Component({
  selector: 'app-sesadm-procedures',
  templateUrl: './sesadm-procedures.page.html',
  styleUrls: ['./sesadm-procedures.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonIcon, IonList, IonLoading, IonSearchbar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, SesadmProceduresProcedureComponent]
})
export class SesadmProceduresPage implements OnInit {

  competence: any = this.navParams.data
  loading: boolean = true
  limit: number = 20

  constructor(
    private navParams: NavParams,
    private sesadmService: SesadmService,
  ) { }

  ngOnInit() {
    this.getProcedures(this.limit)
  }

  procedures: any
  getProcedures(limit: number) {
    this.sesadmService.getProcedures(this.competence.id, limit).subscribe({
      next: (response) => {
        console.log(response)
        this.procedures = response
      },
      complete: () => {
        this.loading = false
      }
    })
  }


  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.limit += 20
    this.sesadmService.getProcedures(this.competence.id, this.limit).subscribe({
      next: (response) => {
        this.procedures = response
      },
      complete: () => {
        event.target.complete();
      }
    })
  }

}
