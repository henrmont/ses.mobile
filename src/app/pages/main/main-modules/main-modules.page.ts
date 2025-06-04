import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SesadmIndexPage } from '../../sesadm/sesadm-index/sesadm-index.page';
import { SisppiIndexPage } from '../../sisppi/sisppi-index/sisppi-index.page';
import { SistfdIndexPage } from '../../sistfd/sistfd-index/sistfd-index.page';

@Component({
  selector: 'app-main-modules',
  templateUrl: './main-modules.page.html',
  styleUrls: ['./main-modules.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class MainModulesPage implements OnInit {

  index: any

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.changeIndex()
  }

  changeIndex() {
    switch (this.route.snapshot.parent?.data['user'].module.name) {
      case 'sesadm':
        this.index = SesadmIndexPage
        break;
      case 'sisppi':
        this.index = SisppiIndexPage
        break;
      case 'sistfd':
        this.index = SistfdIndexPage
        break;
    }
  }

}
