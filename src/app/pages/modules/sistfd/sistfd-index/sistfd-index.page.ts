import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonItem, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonList, IonLabel, IonIcon, IonText } from '@ionic/angular/standalone';
import { SistfdService } from 'src/app/services/sistfd.service';

@Component({
  selector: 'app-sistfd-index',
  templateUrl: './sistfd-index.page.html',
  styleUrls: ['./sistfd-index.page.scss'],
  standalone: true,
  imports: [IonText, IonIcon, IonLabel, IonList, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonItem, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class SistfdIndexPage implements OnInit {

  constructor(
    private sistfdService: SistfdService
  ) { }

  ngOnInit() {
    this.sistfdService.getPacientes().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

}
