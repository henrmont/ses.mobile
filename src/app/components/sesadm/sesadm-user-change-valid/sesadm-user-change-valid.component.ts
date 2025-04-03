import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonText, IonToggle, IonCardContent, IonCard } from "@ionic/angular/standalone";
import { SesadmService } from 'src/app/services/sesadm.service';

@Component({
  selector: 'app-sesadm-user-change-valid',
  templateUrl: './sesadm-user-change-valid.component.html',
  styleUrls: ['./sesadm-user-change-valid.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonToggle, IonText, IonItem, ]
})
export class SesadmUserChangeValidComponent  implements OnInit {

  @Input() user: any

  constructor(
    private sesadmService: SesadmService
  ) { }

  ngOnInit() {}

  changeValidUser() {
    this.sesadmService.changeValidUser(this.user.id).subscribe()
  }

}
