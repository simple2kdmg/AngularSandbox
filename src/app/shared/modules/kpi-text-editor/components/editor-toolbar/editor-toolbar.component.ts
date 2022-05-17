import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
