import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent, IonIcon, IonLoading, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { MainService } from 'src/app/services/main.service';
import { MainHomeArticleComponent } from 'src/app/components/main/main-home-article/main-home-article.component';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonLoading, IonIcon, IonRefresherContent, IonRefresher, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, MainHomeArticleComponent]
})
export class MainHomePage implements OnInit {

  articles: any = null

  constructor(
    private mainService: MainService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getArticles()
  }

  getArticles() {
    this.mainService.getArticles().subscribe({
      next: (response) => {
        this.articles = response
      },
    })
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getArticles()
      event.target.complete();
    }, 2000);
  }

}
