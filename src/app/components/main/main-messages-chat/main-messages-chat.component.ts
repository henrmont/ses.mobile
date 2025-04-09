import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { IonItem, IonAvatar, IonNote, IonContent, ScrollDetail, IonButton, IonModal, IonHeader, IonToolbar, IonButtons, IonIcon, IonChip, IonLabel, IonText, IonFab, IonFabButton, IonFooter, IonInput } from "@ionic/angular/standalone";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-messages-chat',
  templateUrl: './main-messages-chat.component.html',
  styleUrls: ['./main-messages-chat.component.scss'],
  standalone: true,
  imports: [IonInput, IonFooter, IonFabButton, IonFab, IonText, IonLabel, IonChip, IonIcon, IonButtons, IonToolbar, IonHeader, IonModal, IonButton, IonNote, IonAvatar, IonItem, IonInput, IonContent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MainMessagesChatComponent  implements OnInit {

  user = this.route.snapshot.parent?.data['user']

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.getChat()
  }

  @Input() last: any

  @Input() chat: any
  getChat() {
    this.mainService.getChat(this.chat.id).subscribe({
      next: (response) => {
        this.chat = response
        this.messageForm.patchValue({
          chat_id: this.chat.id
        })
      },
    })
  }

  isChatModalOpen = false;
  setChatModalOpen(isOpen: boolean) {
    this.isChatModalOpen = isOpen;
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
    this.getChat()
  }

}
