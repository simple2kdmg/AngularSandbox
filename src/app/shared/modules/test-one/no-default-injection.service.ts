import { Injectable } from '@angular/core';
import { TestInterface } from './test.interface';

@Injectable()
export abstract class NoDefaultInjectionService {
  public testValue?: TestInterface;

  constructor() { }

  public setTestValue(value: TestInterface): void {
    this.testValue = value;
  }
}
