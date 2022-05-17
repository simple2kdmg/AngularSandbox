import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWigModule } from 'ngx-wig';
import { AngularMaterialModule } from './angular-material.module';
import { CustomSelectModule } from './components/custom-select/custom-select.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxWigModule,
    CustomSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    AngularMaterialModule,
    NgxWigModule,
    CustomSelectModule
  ]
})
export class SharedModule { }
