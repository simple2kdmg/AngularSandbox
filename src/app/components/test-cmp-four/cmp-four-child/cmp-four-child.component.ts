import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Self, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, merge, Observable, of, timer } from 'rxjs';
import { exhaustMap, map, shareReplay, take, takeUntil, tap } from 'rxjs/operators';
import { DestroyService } from 'src/app/services/destroy.service';


@Component({
  selector: 'test-cmp-four-child',
  templateUrl: './cmp-four-child.component.html',
  styleUrls: ['./cmp-four-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService]
})
export class CmpFourChildComponent implements OnChanges, OnInit {
  @Input() parameter?: number;

  public inputValue: string = 'Initial \n value';

  public testObjects: { id: number, isOk: boolean }[] = [
    { id: 1, isOk: false },
    { id: 2, isOk: false },
    { id: 3, isOk: false },
    { id: 4, isOk: false },
    { id: 5, isOk: false },
    { id: 6, isOk: false },
    { id: 7, isOk: false },
    { id: 8, isOk: false },
    { id: 9, isOk: false },
    { id: 10, isOk: false },
    { id: 11, isOk: false }
  ];

  constructor(@Self() private destroy$: DestroyService) { }

  ngOnInit(): void {
    console.log(`init: ${this.parameter}`);
  }

  ngOnChanges(): void {
    console.log(`changes: ${this.parameter}`);
  }

  public testWorker(): void {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./cmp-four-child.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(data[0] === data[data.length - 1]);
      };
      worker.postMessage(this.testObjects);
    }
  }

  public onInput(event: Event | null): void {
    if (event == null) return;
    let nextValue = (event.target as HTMLInputElement).value;
    this.inputValue = nextValue.split('\\n').join('\n');
  }

  public onChangeObj(obj: {id: number, isOk: boolean}): void {
    obj.isOk = !obj.isOk;
  }

}
