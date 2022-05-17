import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingServiceScopeComponent } from './testing-service-scope/testing-service-scope.component';



@NgModule({
  declarations: [
    TestingServiceScopeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestingServiceScopeComponent
  ]
})
export class TestOneModule { }
