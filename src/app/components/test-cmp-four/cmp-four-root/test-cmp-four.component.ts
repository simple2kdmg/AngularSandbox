import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, OnInit, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { forkJoin, fromEvent, interval, Observable, of, timer } from 'rxjs';
import { shareReplay, take, takeUntil } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { DestroyService } from 'src/app/services/destroy.service';
import { PopUpService } from 'src/app/shared/modules/pop-up/pop-up.service';


@Component({
  selector: 'test-cmp-four',
  templateUrl: './test-cmp-four.component.html',
  styleUrls: ['./test-cmp-four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
  encapsulation: ViewEncapsulation.None
})
export class TestCmpFourComponent implements DoCheck, OnInit, AfterViewInit {
  @ViewChild('testButton') button?: ElementRef;
  
  public childVisible: boolean = true;
  public parentParameter?: number;

  private messageCounter = 0;

  constructor(@Self() private destroy$: DestroyService,
              private popUpService: PopUpService,
              private testCmpFourService: CommonService,
              private cdRef: ChangeDetectorRef) { }

  ngDoCheck(): void {
    timer(0, 1000).subscribe(() => console.log('tick'));
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.parentParameter = 100;
      this.cdRef.detectChanges();
    }, 2000);

    setTimeout(() => {
      this.parentParameter = 100;
      this.cdRef.detectChanges();
    }, 3000);
  }

  ngAfterViewInit(): void {
    fromEvent(this.button!.nativeElement, 'click').pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => console.log('No change detection!!'));
  }

  public testInfoPopUp(): void {
    this.popUpService.showInfo(`Very very very very very very very very very very very long Info message ${++this.messageCounter}`);
  }

  public testSuccessPopUp(): void {
    this.popUpService.showSuccess(`Product models permission updated succesfully. ${++this.messageCounter}`);
  }

  public testWarningPopUp(): void {
    this.popUpService.showWarning(`Warning message ${++this.messageCounter}`);
  }

  public testErrorPopUp(): void {
    this.popUpService.showError(new Error(), `Error message ${++this.messageCounter}`);
  }

  public loadTestOfPopUp(): void {
    for (let i = 0; i < 15; i++) {
      this.popUpService.showWarning(`Warning message ${++this.messageCounter}`);
    }
  }

  public toggleChild(): void {
    this.childVisible = !this.childVisible;
  }

}
