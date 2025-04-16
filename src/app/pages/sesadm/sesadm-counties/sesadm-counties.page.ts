import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonSearchbar, IonMenuButton, IonRefresher, IonRefresherContent, IonList, IonIcon, IonLoading } from '@ionic/angular/standalone';
import { SesadmService } from 'src/app/services/sesadm.service';
import { SesadmCountiesCountyComponent } from 'src/app/components/sesadm/sesadm-counties-county/sesadm-counties-county.component';

@Component({
  selector: 'app-sesadm-counties',
  templateUrl: './sesadm-counties.page.html',
  styleUrls: ['./sesadm-counties.page.scss'],
  standalone: true,
  imports: [IonLoading, IonIcon, IonList, IonRefresherContent, IonRefresher, IonSearchbar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, SesadmCountiesCountyComponent]
})
export class SesadmCountiesPage implements OnInit {

  constructor(
    private sesadmService: SesadmService,
  ) { }

  ngOnInit() {
    this.getCounties()
  }

  counties: any
  getCounties() {
    this.sesadmService.getCounties().subscribe({
      next: (response) => {
        this.counties = response
      },
    })
  }

  handleRefresh(event: CustomEvent) {
    this.getCounties()
    setTimeout(() => {
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000)
  }

}
