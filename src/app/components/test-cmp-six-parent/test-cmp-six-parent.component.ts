import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'test-cmp-six-parent',
  templateUrl: './test-cmp-six-parent.component.html',
  styleUrls: ['./test-cmp-six-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCmpSixParentComponent implements OnInit {
  public parentProperty: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public changeProperty(): void {
    //this.parentProperty = 100;
    /* setTimeout(() => {
      ++this.parentProperty;
      console.log(`parentProperty: ${this.parentProperty}`);
    }, 0); */
    of(true).subscribe(() => {
      ++this.parentProperty;
      console.log(`parentProperty: ${this.parentProperty}`);
    });
  }

}
