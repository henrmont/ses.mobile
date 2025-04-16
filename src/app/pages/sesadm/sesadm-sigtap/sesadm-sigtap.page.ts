import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonSearchbar, IonMenuButton, IonRefresher, IonRefresherContent, IonFab, IonFabButton, IonIcon, IonLoading } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sesadm-sigtap',
  templateUrl: './sesadm-sigtap.page.html',
  styleUrls: ['./sesadm-sigtap.page.scss'],
  standalone: true,
  imports: [IonLoading, IonIcon, IonFabButton, IonFab, IonRefresherContent, IonRefresher, IonSearchbar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class SesadmSigtapPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
