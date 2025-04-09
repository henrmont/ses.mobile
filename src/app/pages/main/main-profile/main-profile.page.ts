import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { MainProfileChangeInfoComponent } from 'src/app/components/main/main-profile-change-info/main-profile-change-info.component';
import { MainProfileChangePictureComponent } from "../../../components/main/main-profile-change-picture/main-profile-change-picture.component";

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.page.html',
  styleUrls: ['./main-profile.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, MainProfileChangeInfoComponent, MainProfileChangePictureComponent]
})
export class MainProfilePage implements OnInit {

  user = this.route.snapshot.parent?.data['user']

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
