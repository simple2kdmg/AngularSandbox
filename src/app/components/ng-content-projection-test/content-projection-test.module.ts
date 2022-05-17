import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BetterWrapperComponent } from './better-wrapper/better-wrapper.component';



@NgModule({
  declarations: [
    WrapperComponent,
    ContentComponent,
    BetterWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WrapperComponent,
    ContentComponent,
    BetterWrapperComponent
  ]
})
export class ContentProjectionTestModule { }
