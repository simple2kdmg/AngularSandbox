import { Injectable, OnDestroy } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Injectable()
export class TestCmpFiveService extends CommonService implements OnDestroy {
  constructor() {
    super();
    console.log('TestCmpFiveService init.');
  }

  ngOnDestroy(): void {
    console.log('TestCmpFiveService destroyed.')
  }
}
