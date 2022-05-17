import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCmpFourRoutingModule } from './test-cmp-five-routing.module';
import { TestCmpFiveComponent } from './test-cmp-five.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestCmpFiveService } from './test-cmp-five.service';
import { CommonService } from 'src/app/services/common.service';
import { NoDefaultInjectionService } from 'src/app/shared/modules/test-one/no-default-injection.service';
import { TestCmpFive2Service } from './test-cmp-five-2.service';
import { TestOneModule } from 'src/app/shared/modules/test-one/test-one.module';


@NgModule({
  declarations: [
    TestCmpFiveComponent
  ],
  imports: [
    CommonModule,
    TestCmpFourRoutingModule,
    SharedModule,
    TestOneModule
  ],
  providers: [
    //TestCmpFiveService,
    { provide: CommonService, useClass: TestCmpFiveService },
    { provide: NoDefaultInjectionService, useClass: TestCmpFive2Service }
  ]
})
export class TestCmpFiveModule { }
