import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonNavLink, IonButton, IonIcon, IonText, IonRefresher, IonRefresherContent, IonLoading } from '@ionic/angular/standalone';
import { MainService } from 'src/app/services/main.service';
import { SistfdIndexPage } from 'src/app/pages/modules/sistfd/sistfd-index/sistfd-index.page';
import { SisppiIndexPage } from 'src/app/pages/modules/sisppi/sisppi-index/sisppi-index.page';
import { SesadmIndexPage } from 'src/app/pages/sesadm/sesadm-index/sesadm-index.page';

@Component({
  selector: 'app-main-modules-index',
  templateUrl: './main-modules-index.page.html',
  styleUrls: ['./main-modules-index.page.scss'],
  standalone: true,
  imports: [IonLoading, IonRefresherContent, IonRefresher, IonText, IonIcon, IonButton, IonNavLink, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton]
})
export class MainModulesIndexPage implements OnInit {

  sesadm = SesadmIndexPage
  sistfd = SistfdIndexPage
  sisppi = SisppiIndexPage

  modules: any

  constructor(
    private mainService: MainService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.checkModulesStatus()
  }

  handleRefresh(event: CustomEvent) {
    this.checkModulesStatus()
    setTimeout(() => {
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }

  private checkModulesStatus() {
    this.mainService.getUserModules().subscribe({
      next: (response) => {
        response.forEach((element: any) => {
          const url = fetch(element.module.url, { method: 'HEAD', mode: 'no-cors' }); // HEAD request is faster.
          url.then((res) => {
            element.module.status = true
          });
        });
        this.modules = response
      },
    })
  }

}
