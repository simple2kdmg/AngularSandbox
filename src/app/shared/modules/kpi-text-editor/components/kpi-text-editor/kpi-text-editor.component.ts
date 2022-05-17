import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'kpi-text-editor',
  templateUrl: './kpi-text-editor.component.html',
  styleUrls: ['./kpi-text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpiTextEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    console.log(value);
  }

}
