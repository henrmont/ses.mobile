import { Component, Input, OnInit } from '@angular/core';
import { IonToolbar, IonItem, IonText, IonIcon, IonModal, IonHeader, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonList, IonCardContent, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sisppi-procedures-procedure',
  templateUrl: './sisppi-procedures-procedure.component.html',
  styleUrls: ['./sisppi-procedures-procedure.component.scss'],
  standalone: true,
  imports: [IonLabel, IonCardContent, IonList, IonCardTitle, IonCardHeader, IonCard, IonContent, IonButton, IonButtons, IonTitle, IonHeader, IonModal, IonIcon, IonText, IonItem, IonToolbar, ],
})
export class SisppiProceduresProcedureComponent  implements OnInit {

  @Input() procedure: any
  @Input() last: any

  constructor() { }

  ngOnInit() {}

  isShowModalOpen = false;
  setShowModalOpen(isOpen: boolean) {
    this.isShowModalOpen = isOpen
  }

}
