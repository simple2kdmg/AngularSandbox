import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCmpFourComponent } from './cmp-four-root/test-cmp-four.component';

const routes: Routes = [
  {
    component: TestCmpFourComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCmpFourRoutingModule { }
