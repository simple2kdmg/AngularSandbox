import { Injectable, OnDestroy } from '@angular/core';
import { NoDefaultInjectionService } from 'src/app/shared/modules/test-one/no-default-injection.service';


@Injectable()
export class TestCmpFive2Service extends NoDefaultInjectionService implements OnDestroy {
  constructor() {
    super();
    console.log('TestCmpFive2Service init.');
  }

  ngOnDestroy(): void {
    console.log('TestCmpFive2Service destroyed.')
  }
}
