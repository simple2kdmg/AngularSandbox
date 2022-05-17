import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from './pop-up.component';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    PopUpComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    OverlayModule
  ],
  exports: [
    PopUpComponent
  ]
})
export class PopUpModule { }
