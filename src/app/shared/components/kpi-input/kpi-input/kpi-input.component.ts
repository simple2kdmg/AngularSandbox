import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild,
         ElementRef, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';


@Component({
  selector: 'input[kpi-input]',
  templateUrl: './kpi-input.component.html',
  styleUrls: ['./kpi-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class KpiInputComponent implements AfterViewInit, OnDestroy {
  @ContentChild('input') set input(value: ElementRef) {
    if (!value) return;
    this.nativeInput = value.nativeElement as HTMLInputElement;
  }

  public nativeInput?: HTMLInputElement;

  constructor(private elRef: ElementRef,
              private focusMonitor: FocusMonitor) { }

  ngAfterViewInit(): void {
    this.focusMonitor.monitor(this.elRef);
  }

  public focus(origin?: FocusOrigin, options?: FocusOptions): void {
    if (origin) {
      this.focusMonitor.focusVia(this.elRef.nativeElement, origin, options);
    } else {
      this.elRef.nativeElement.focus(options);
    }
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elRef);
  }

}
