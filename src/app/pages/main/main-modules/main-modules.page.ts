import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonNav } from '@ionic/angular/standalone';
import { MainModulesIndexPage } from './main-modules-index/main-modules-index.page';

@Component({
  selector: 'app-main-modules',
  templateUrl: './main-modules.page.html',
  styleUrls: ['./main-modules.page.scss'],
  standalone: true,
  imports: [IonNav, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class MainModulesPage implements OnInit {

  index = MainModulesIndexPage

  constructor() { }

  ngOnInit() {
  }

}
