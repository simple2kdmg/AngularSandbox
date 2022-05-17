import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-cmp-two',
  templateUrl: './test-cmp-two.component.html',
  styleUrls: ['./test-cmp-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCmpTwoComponent implements OnInit {
  public isContentVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleContentVisibility(): void {
    this.isContentVisible = !this.isContentVisible;
  }

}
