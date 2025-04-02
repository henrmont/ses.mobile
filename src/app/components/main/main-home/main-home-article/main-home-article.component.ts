import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonLabel, IonButton, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-main-home-article',
  templateUrl: './main-home-article.component.html',
  styleUrls: ['./main-home-article.component.scss'],
  standalone: true,
  imports: [IonText, IonContent, IonTitle, IonButtons, IonToolbar, IonHeader, IonModal, IonButton, IonLabel, IonIcon, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, CommonModule]
})
export class MainHomeArticleComponent  implements OnInit {

  @Input() article: any

  constructor() {
  }

  ngOnInit() {}

  isArticleModalOpen = false;
  setArticleModalOpen(isOpen: boolean) {
    this.isArticleModalOpen = isOpen;
  }

}
