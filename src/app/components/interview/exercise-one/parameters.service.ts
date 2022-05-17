import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  param1$ = new ReplaySubject<number>(1);
  param2$ = new ReplaySubject<number>(1);
  param3$ = new ReplaySubject<number>(1);

  constructor() { }
}
