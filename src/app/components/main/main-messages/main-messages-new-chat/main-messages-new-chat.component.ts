import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonNav, IonItem, IonAvatar, IonNote, IonModal, IonButton, IonHeader, IonToolbar, IonButtons, IonIcon, IonChip, IonLabel, IonContent, IonFab, IonFabButton, IonFooter, IonInput, IonText, ScrollDetail, IonRefresher, IonRefresherContent } from "@ionic/angular/standalone";
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-messages-new-chat',
  templateUrl: './main-messages-new-chat.component.html',
  styleUrls: ['./main-messages-new-chat.component.scss'],
  standalone: true,
  imports: [IonRefresherContent, IonRefresher, IonText, IonInput, IonFooter, IonFabButton, IonFab, IonContent, IonLabel, IonChip, IonIcon, IonButtons, IonToolbar, IonHeader, IonButton, IonModal, IonNote, IonAvatar, IonItem, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MainMessagesNewChatComponent  implements OnInit {

  @Input() user: any
  @Input() last: any

  constructor(
    private mainService: MainService,
    private formBuilder: FormBuilder,
    private nav: IonNav
  ) { }

  ngOnInit() {
    this.getUserChat()
  }

  isChatModalOpen = false;
  setChatModalOpen(isOpen: boolean) {
    this.isChatModalOpen = isOpen;
  }

  chat: any
  getUserChat() {
    this.mainService.getUserChat(this.user.id).subscribe({
      next: (response) => {
        this.chat = response
        this.messageForm.patchValue({
          chat_id: this.chat.id
        })
      }
    })
  }

  @ViewChild('content') private content!: IonContent
  showScrollButton: boolean = false
  scrollToTop() {
    this.content.scrollToTop(200);
  }
  setShowScrollButton(event: CustomEvent<ScrollDetail>) {
    if (event.detail.scrollTop != 0) {
      this.showScrollButton = true
    } else {
      this.showScrollButton = false
    }
  }

  messageForm: FormGroup = this.formBuilder.group({
    chat_id: [null, [Validators.required]],
    message: [''],
  })

  onMessageSubmit(): any {
    if (this.mainService.registerMessage(this.messageForm.value).subscribe()) {
      this.messageForm.patchValue({
        message: null,
      })
      this.messageForm.markAsPristine()
    }
    this.getUserChat()
  }

  popToRoot() {
    this.nav.popToRoot()
  }

}
