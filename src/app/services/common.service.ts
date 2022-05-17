import { Injectable } from "@angular/core";

@Injectable()
export class CommonService {
  public testMethod(): void {
    console.log('Common service testMethod call');
  }
}