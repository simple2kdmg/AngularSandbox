import { ErrorHandler, Inject, Injectable, Injector, NgZone } from "@angular/core";
import { PopUpService } from "../shared/modules/pop-up/pop-up.service";


@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(@Inject(Injector) private injector: Injector,
              private zone: NgZone) {}
  
  // Have to get PopUpService from injector rather
  // than constructor injection to avoid cyclic dependency error 
  private get popUpService(): PopUpService {
    return this.injector.get(PopUpService);
  }

  public handleError(error: any) {
    this.zone.run(() => this.popUpService.showError(error, undefined, 5000));

    console.error('Error from global error handler', error);
  }
}
