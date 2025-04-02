import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonRefresher, IonRefresherContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.page.html',
  styleUrls: ['./main-dashboard.page.scss'],
  standalone: true,
  imports: [IonIcon, IonRefresherContent, IonRefresher, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton ]
})
export class MainDashboardPage implements OnInit {

  dashboards: any = null

  constructor(
  ) { }

  ngOnInit() {
  }

}
