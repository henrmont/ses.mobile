import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonLabel } from '@ionic/angular/standalone';
import { SisppiService } from 'src/app/services/sisppi.service';

@Component({
  selector: 'app-sisppi-index',
  templateUrl: './sisppi-index.page.html',
  styleUrls: ['./sisppi-index.page.scss'],
  standalone: true,
  imports: [IonLabel, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class SisppiIndexPage implements OnInit {

  welcome: any

  constructor(
    private sisppiService: SisppiService
  ) { }

  ngOnInit() {
    this.sisppiService.welcome().subscribe({
      next: (response) => {
        this.welcome = response
      }
    })
  }

}
