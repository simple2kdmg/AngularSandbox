import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { RootComponent } from './components/root/root.component';
import { TestCmpOneComponent } from './components/test-cmp-one/test-cmp-one.component';
import { TestCmpTwoComponent } from './components/test-cmp-two/test-cmp-two.component';
import { SpinnerDirective } from './directives/spinner.directive';
import { ContentProjectionTestModule } from './components/ng-content-projection-test/content-projection-test.module';
import { GlobalErrorHandler } from './services/global-error-handler.service';
import { TestCpmThreeComponent } from './components/test-cpm-three/test-cpm-three.component';
import { PopUpModule } from './shared/modules/pop-up/pop-up.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KpiTextEditorModule } from './shared/modules/kpi-text-editor/kpi-text-editor.module';
import { TestCmpSixParentComponent } from './components/test-cmp-six-parent/test-cmp-six-parent.component';
import { TestCmpSixChildComponent } from './components/test-cmp-six-child/test-cmp-six-child.component';


@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    TestCmpOneComponent,
    TestCmpTwoComponent,
    TestCpmThreeComponent,
    SpinnerDirective,
    NavbarComponent,
    TestCmpSixParentComponent,
    TestCmpSixChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    SharedModule,
    ContentProjectionTestModule,
    PopUpModule,
    KpiTextEditorModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
