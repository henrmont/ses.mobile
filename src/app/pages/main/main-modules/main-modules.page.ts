import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { MainModulesIndexPage } from './main-modules-index/main-modules-index.page';

@Component({
  selector: 'app-main-modules',
  templateUrl: './main-modules.page.html',
  styleUrls: ['./main-modules.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class MainModulesPage implements OnInit {

  index = MainModulesIndexPage

  constructor() { }

  ngOnInit() {
  }

}
