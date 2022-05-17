import { ComponentRef, Injectable } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopUpComponent } from './pop-up.component';
import { PopUpType } from './pop-up-type.enum';
import { PopUpMessage } from './pop-up-message.model';


@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  private overlayRef: OverlayRef;
  private popUpComponentRef?: ComponentRef<PopUpComponent>;

  constructor(overlay: Overlay,
              overlayPositionBuilder: OverlayPositionBuilder) {
    const positionStrategy = overlayPositionBuilder.global().bottom();
    this.overlayRef = overlay.create({ positionStrategy: positionStrategy });
  }

  public showError(error: Error, message?: string, durationMs: number = 3000): void {
    if (!this.overlayRef.hasAttached()) {
      this.popUpComponentRef = this.overlayRef.attach(new ComponentPortal(PopUpComponent));
    }

    this.popUpComponentRef!.instance.addMessage(new PopUpMessage(
      message || (error.message ? error.message : error.toString()),
      PopUpType.Error,
      durationMs,
      error
    ));
  }

  public showInfo(message: string, durationMs: number = 3000): void {
    this.showMessage(message, PopUpType.Info, durationMs);
  }

  public showSuccess(message: string, durationMs: number = 3000): void {
    this.showMessage(message, PopUpType.Success, durationMs);
  }

  public showWarning(message: string, durationMs: number = 3000): void {
    this.showMessage(message, PopUpType.Warning, durationMs);
  }

  private showMessage(message: string, type: PopUpType, durationMs: number): void {
    if (!this.overlayRef.hasAttached()) {
      this.popUpComponentRef = this.overlayRef.attach(new ComponentPortal(PopUpComponent));
    }

    this.popUpComponentRef!.instance.addMessage(new PopUpMessage(
      message,
      type,
      durationMs
    ));
  }
}
