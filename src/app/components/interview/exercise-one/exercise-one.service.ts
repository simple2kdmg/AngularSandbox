import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseOneService {
  public actualProductId$ = new ReplaySubject<number>(1);

  constructor() { }
}
