import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';

@Injectable()
export class TestCmpFourService extends CommonService implements OnDestroy {
  public someValue: string = 'default';

  constructor() {
    super();
    console.log('TestCmpFourService init.');
  }

  public checkPresence(caller: string, newValue?: string): void {
    if (newValue) this.someValue = newValue;
    console.log(`TestCmpFourService resolved from ${caller}.`);
  }

  public fakeHttpRequest(): Observable<string[]> {
    return of(['This', 'is', 'mock', 'data']).pipe(
      delay(1000)
    );
  }

  public fakeHeavyHttpRequest(): Observable<string[]> {
    return of(['This', 'is', 'massive', 'mock', 'data']).pipe(
      delay(4000)
    );
  }

  ngOnDestroy(): void {
    console.log('TestCmpFourService destroyed.')
  }
}
