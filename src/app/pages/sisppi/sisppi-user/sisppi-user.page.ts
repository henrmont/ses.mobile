import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavParams } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton } from '@ionic/angular/standalone';
import { SesadmUserChangeValidComponent } from 'src/app/components/sesadm/sesadm-user-change-valid/sesadm-user-change-valid.component';
import { SesadmUserChangeRolesComponent } from 'src/app/components/sesadm/sesadm-user-change-roles/sesadm-user-change-roles.component';
import { SesadmUserChangeInfoComponent } from 'src/app/components/sesadm/sesadm-user-change-info/sesadm-user-change-info.component';
import { SisppiService } from 'src/app/services/sisppi.service';

@Component({
  selector: 'app-sisppi-user',
  templateUrl: './sisppi-user.page.html',
  styleUrls: ['./sisppi-user.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, SesadmUserChangeValidComponent, SesadmUserChangeInfoComponent, SesadmUserChangeRolesComponent]
})
export class SisppiUserPage implements OnInit {

  constructor(
    private navParams: NavParams,
    private sisppiService: SisppiService
  ) { }

  ngOnInit() {
  }

  user: any = this.navParams.data
  getUser() {
    this.sisppiService.getUser(this.user.id).subscribe({
      next: (response) => {
        this.user = response
      }
    })
  }



}
