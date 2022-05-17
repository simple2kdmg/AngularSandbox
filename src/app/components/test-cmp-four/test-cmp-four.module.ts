import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestCmpFourRoutingModule } from './test-cmp-four-routing.module';
import { TestCmpFourComponent } from './cmp-four-root/test-cmp-four.component';
import { CmpFourChildComponent } from './cmp-four-child/cmp-four-child.component';
import { TestCmpFourService } from './test-cmp-four.service';
import { CommonService } from 'src/app/services/common.service';


@NgModule({
  declarations: [
    TestCmpFourComponent,
    CmpFourChildComponent
  ],
  imports: [
    CommonModule,
    TestCmpFourRoutingModule
  ],
  providers: [
    //TestCmpFourService,
    { provide: CommonService, useClass: TestCmpFourService }
  ]
})
export class TestCmpFourModule { }
