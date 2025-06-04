import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonSearchbar, IonList, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonLoading, IonMenuButton } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular';
import { SisppiService } from 'src/app/services/sisppi.service';
import { InfiniteScrollCustomEvent } from '@ionic/core';
import { SisppiProceduresProcedureComponent } from 'src/app/components/sisppi/sisppi-procedures-procedure/sisppi-procedures-procedure.component';

@Component({
  selector: 'app-sisppi-procedures',
  templateUrl: './sisppi-procedures.page.html',
  styleUrls: ['./sisppi-procedures.page.scss'],
  standalone: true,
  imports: [IonLoading, IonInfiniteScrollContent, IonInfiniteScroll, IonIcon, IonList, IonSearchbar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, SisppiProceduresProcedureComponent]
})
export class SisppiProceduresPage implements OnInit {

  competence: any = this.navParams.data
  loading: boolean = true
  limit: number = 20

  constructor(
    private navParams: NavParams,
    private sisppiService: SisppiService,
  ) { }

  ngOnInit() {
    this.getProcedures(this.limit)
  }

  procedures: any
  getProcedures(limit: number) {
    this.sisppiService.getProcedures(this.competence.id, limit).subscribe({
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
    this.sisppiService.getProcedures(this.competence.id, this.limit).subscribe({
      next: (response) => {
        this.procedures = response
      },
      complete: () => {
        event.target.complete();
      }
    })
  }

}
