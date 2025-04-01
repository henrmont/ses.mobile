import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent, IonIcon } from '@ionic/angular/standalone';
import { MainService } from 'src/app/services/main.service';
import { MainHomeArticleComponent } from 'src/app/components/main/main-home/main-home-article/main-home-article.component';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonRefresherContent, IonRefresher, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule, MainHomeArticleComponent]
})
export class MainHomePage implements OnInit {

  articles: any

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
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
