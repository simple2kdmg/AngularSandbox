import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { DefaultTestOneService } from '../default-test-one.service';
import { NoDefaultInjectionService } from '../no-default-injection.service';


@Component({
  selector: 'testing-service-scope',
  templateUrl: './testing-service-scope.component.html',
  styleUrls: ['./testing-service-scope.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DefaultTestOneService]
})
export class TestingServiceScopeComponent implements OnInit, OnDestroy {
  private winnerService: NoDefaultInjectionService;

  constructor(@Optional() optionalService: NoDefaultInjectionService,
              defaultService: DefaultTestOneService) {
    this.winnerService = optionalService ?? defaultService;
  }

  ngOnInit(): void {
    console.log(`TestingServiceScope component INIT`);
    console.log(this.winnerService.testValue);
    if (!this.winnerService.testValue) {
      this.winnerService.setTestValue({ id: 1, data: 'test data' });
    }
  }

  ngOnDestroy(): void {
    console.log(`TestingServiceScope component DESTROY`);
  }

}
