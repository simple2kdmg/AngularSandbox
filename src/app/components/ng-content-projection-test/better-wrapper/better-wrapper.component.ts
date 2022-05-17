import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'better-wrapper',
  templateUrl: './better-wrapper.component.html',
  styleUrls: ['./better-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetterWrapperComponent implements OnInit {
  @Input() contentVisible: boolean = false;
  @ContentChild('bWrapperContent') templateRef: TemplateRef<any> | null = null;

  constructor() { }

  ngOnInit(): void {
    console.log('better wrapper init');
  }

}
