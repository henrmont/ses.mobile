import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonIcon, IonLabel, IonModal, IonToolbar, IonTitle, IonButtons, IonButton, IonHeader, IonContent, IonText, IonList } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sesadm-counties-county',
  templateUrl: './sesadm-counties-county.component.html',
  styleUrls: ['./sesadm-counties-county.component.scss'],
  standalone: true,
  imports: [IonList, IonText, IonContent, IonHeader, IonButton, IonButtons, IonTitle, IonToolbar, IonModal, IonIcon, IonItem, IonLabel, CommonModule],
})
export class SesadmCountiesCountyComponent  implements OnInit {

  @Input() county: any
  @Input() last: any

  constructor() { }

  ngOnInit() {}

  isShowModalOpen = false;
  setShowModalOpen(isOpen: boolean) {
    this.isShowModalOpen = isOpen
  }

}
