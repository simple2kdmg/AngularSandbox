import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, timer } from 'rxjs';
import { map, shareReplay, switchMap, take, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { ResettableReplaySubject } from 'src/app/models/resettable-replay-subject.model';
import { CommonService } from 'src/app/services/common.service';
import { DestroyService } from 'src/app/services/destroy.service';


class A {
  constructor() {
    this.test();
  }

  public test(): void {
    console.log('A test');
  }
}

class B extends A {
  constructor() {
    super();
  }

  public test(): void {
    super.test();
    console.log('B test');
  }
}

enum TestEnum {
  A = 1,
  B = 2,
  C = 3
}

enum TestEnum2 {
  A = 'A1',
  B = 'B2',
  C = 'C3'
}

@Component({
  selector: 'test-cmp-five',
  templateUrl: './test-cmp-five.component.html',
  styleUrls: ['./test-cmp-five.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class TestCmpFiveComponent implements OnInit/* , OnDestroy */ {
  public data: { id: number, name: string, sortOrder: number }[] = [
    { id: 1, name: 'node-1', sortOrder: 1 },
    { id: 2, name: 'node-2', sortOrder: 2 },
    { id: 3, name: 'node-3', sortOrder: 3 },
    { id: 4, name: 'node-4', sortOrder: 4 },
    { id: 5, name: 'node-5', sortOrder: 5 },
    { id: 6, name: 'node-6', sortOrder: 6 },
    { id: 7, name: 'node-7', sortOrder: 7 }
  ];

  public hierarchyData: { id: number, parentId: number | null, name: string, sortOrder: number }[] = [
    { id: 1, parentId: null, name: 'node-1', sortOrder: 1 },
    { id: 2, parentId: 1, name: 'child node-1-1', sortOrder: 1 },
    { id: 3, parentId: 1, name: 'child node-1-2', sortOrder: 2 },
    { id: 4, parentId: 3, name: 'child node-1-2-1', sortOrder: 1 },
    { id: 5, parentId: null, name: 'node-2', sortOrder: 2 },
    { id: 6, parentId: null, name: 'node-3', sortOrder: 3 },
    { id: 7, parentId: 6, name: 'child node-3-1', sortOrder: 1 },
    { id: 8, parentId: 6, name: 'child node-3-2', sortOrder: 2 }
  ];

  constructor(private destroy$: DestroyService,
              private cdRef: ChangeDetectorRef,
              private cmpFiveService: CommonService) { }

  ngOnInit(): void {
    
  }

  /* ngOnDestroy(): void {
    console.log('component 5 onDestroy');
  } */

}
