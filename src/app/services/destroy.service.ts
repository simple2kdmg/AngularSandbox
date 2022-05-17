import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class DestroyService extends Subject<boolean> implements OnDestroy {
  constructor() {
    super();
  }

  ngOnDestroy(): void {
    console.log('destroy service onDestroy');
    this.next(true);
    this.complete();
  }
}
