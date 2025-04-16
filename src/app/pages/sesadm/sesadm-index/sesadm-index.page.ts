import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonButton, IonIcon, IonText, IonNavLink, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { SesadmUsersPage } from '../sesadm-users/sesadm-users.page';
import { SesadmRolesPage } from '../sesadm-roles/sesadm-roles.page';
import { SesadmSigtapPage } from '../sesadm-sigtap/sesadm-sigtap.page';
import { SesadmCountiesPage } from '../sesadm-counties/sesadm-counties.page';

@Component({
  selector: 'app-sesadm-index',
  templateUrl: './sesadm-index.page.html',
  styleUrls: ['./sesadm-index.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonNavLink, IonText, IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton]
})
export class SesadmIndexPage implements OnInit {

  sesadm_users = SesadmUsersPage
  sesadm_roles = SesadmRolesPage
  sesadm_sigtap = SesadmSigtapPage
  sesadm_counties = SesadmCountiesPage

  constructor() { }

  ngOnInit() {
  }

}
