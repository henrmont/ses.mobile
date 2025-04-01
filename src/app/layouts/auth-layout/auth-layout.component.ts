import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  standalone: true,
  imports: [IonRouterOutlet, ]
})
export class AuthLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
