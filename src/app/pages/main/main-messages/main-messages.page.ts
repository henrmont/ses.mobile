import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { MainMessagesIndexPage } from './main-messages-index/main-messages-index.page';

@Component({
  selector: 'app-main-messages',
  templateUrl: './main-messages.page.html',
  styleUrls: ['./main-messages.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class MainMessagesPage implements OnInit {

  index = MainMessagesIndexPage

  constructor(
  ) { }

  ngOnInit() {
  }

}
