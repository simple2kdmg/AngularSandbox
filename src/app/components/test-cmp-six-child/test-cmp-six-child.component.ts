import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'test-cmp-six-child',
  templateUrl: './test-cmp-six-child.component.html',
  styleUrls: ['./test-cmp-six-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCmpSixChildComponent implements OnChanges, OnInit, DoCheck {
  @Input() property: number | undefined;

  constructor() { }

  ngOnChanges(): void {
    console.log(`cmp 6 CHILD changes: ${this.property}`);
  }

  ngOnInit(): void {
    console.log(`cmp 6 CHILD init: ${this.property}`);
  }

  ngDoCheck(): void {
    console.log(`cmp 6 CHILD do check: ${this.property}`);
  }

}
