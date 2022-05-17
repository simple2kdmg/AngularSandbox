import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PopUpMessage } from './pop-up-message.model';
import { PopUpType } from './pop-up-type.enum';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopUpComponent implements OnInit {
  public messages: PopUpMessage[] = [];
  public messagesMap: Map<number, PopUpMessage>;
  public popUpType = PopUpType;
  private messageCounter: number;

  constructor(private cdRef: ChangeDetectorRef) {
    this.messageCounter = 0;
    this.messagesMap = new Map<number, PopUpMessage>();
  }

  ngOnInit(): void {
  }

  public addMessage(message: PopUpMessage): void {
    const messageId = ++this.messageCounter;
    this.messagesMap.set(messageId, message);
    this.updateMessagesArray();

    setTimeout(() => {
      this.messagesMap.delete(messageId);
      this.updateMessagesArray();
    }, message.durationMs);
  }

  private updateMessagesArray(): void {
    this.messages = [...this.messagesMap.values()];
    this.cdRef.detectChanges();
  }

}
