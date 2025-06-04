import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonText, IonIcon, IonModal, IonHeader, IonToolbar, IonButton, IonTitle, IonButtons, IonContent, IonList, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sesadm-procedures-procedure',
  templateUrl: './sesadm-procedures-procedure.component.html',
  styleUrls: ['./sesadm-procedures-procedure.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonList, IonContent, IonButtons, IonTitle, IonButton, IonToolbar, IonHeader, IonModal, IonIcon, IonText, IonItem, ]
})
export class SesadmProceduresProcedureComponent  implements OnInit {

  @Input() procedure: any
  @Input() last: any

  constructor() { }

  ngOnInit() {}

  isShowModalOpen = false;
  setShowModalOpen(isOpen: boolean) {
    this.isShowModalOpen = isOpen
  }

}
