import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sisppi-index',
  templateUrl: './sisppi-index.page.html',
  styleUrls: ['./sisppi-index.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class SisppiIndexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
