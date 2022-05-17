import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiTextEditorComponent } from './components/kpi-text-editor/kpi-text-editor.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    KpiTextEditorComponent,
    EditorToolbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    KpiTextEditorComponent
  ]
})
export class KpiTextEditorModule { }
