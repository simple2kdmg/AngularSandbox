import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { TestCmpOneComponent } from './components/test-cmp-one/test-cmp-one.component';
import { TestCmpTwoComponent } from './components/test-cmp-two/test-cmp-two.component';
import { TestCpmThreeComponent } from './components/test-cpm-three/test-cpm-three.component';
import { TestCmpFiveComponent } from './components/test-cmp-five/test-cmp-five.component';
import { TestCmpSixParentComponent } from './components/test-cmp-six-parent/test-cmp-six-parent.component';


const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'cmp-one',
        component: TestCmpOneComponent
      },
      {
        path: 'cmp-two',
        component: TestCmpTwoComponent
      },
      {
        path: 'cmp-three',
        component: TestCpmThreeComponent
      },
      {
        path: 'cmp-four',
        loadChildren: () => import('./components/test-cmp-four/test-cmp-four.module').then(m => m.TestCmpFourModule)
      },
      {
        path: 'cmp-five',
        loadChildren: () => import('./components/test-cmp-five/test-cmp-five.module').then(m => m.TestCmpFiveModule)
      },
      {
        path: 'cmp-six',
        component: TestCmpSixParentComponent
      },
      { path: '',   redirectTo: '/cmp-five', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
