import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCmpFiveComponent } from './test-cmp-five.component';

const routes: Routes = [
  {
    component: TestCmpFiveComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCmpFourRoutingModule { }
