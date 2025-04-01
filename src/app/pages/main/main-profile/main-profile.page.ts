import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonText, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { MainProfileChangeInfoComponent } from 'src/app/components/main/main-profile/main-profile-change-info/main-profile-change-info.component';
import { MainProfileChangePictureComponent } from "../../../components/main/main-profile/main-profile-change-picture/main-profile-change-picture.component";

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.page.html',
  styleUrls: ['./main-profile.page.scss'],
  standalone: true,
  imports: [IonButton, IonText, IonLabel, IonIcon, IonItem, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, MainProfileChangeInfoComponent, MainProfileChangePictureComponent, MainProfileChangePictureComponent]
})
export class MainProfilePage implements OnInit {

  user = this.route.snapshot.parent?.data['user']

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
