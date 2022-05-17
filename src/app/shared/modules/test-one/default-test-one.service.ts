import { Injectable, OnDestroy } from '@angular/core';
import { NoDefaultInjectionService } from './no-default-injection.service';

@Injectable()
export class DefaultTestOneService extends NoDefaultInjectionService implements OnDestroy {

  constructor() {
    super();
    console.log('default service init');
  }

  ngOnDestroy(): void {
    console.log('default service destroy');
  }
}
