import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonLabel } from '@ionic/angular/standalone';
import { SistfdService } from 'src/app/services/sistfd.service';

@Component({
  selector: 'app-sistfd-index',
  templateUrl: './sistfd-index.page.html',
  styleUrls: ['./sistfd-index.page.scss'],
  standalone: true,
  imports: [IonLabel, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class SistfdIndexPage implements OnInit {

  welcome: any

  constructor(
    private sistfdService: SistfdService
  ) { }

  ngOnInit() {
    this.sistfdService.welcome().subscribe({
      next: (response) => {
        this.welcome = response
      }
    });
  }

}
