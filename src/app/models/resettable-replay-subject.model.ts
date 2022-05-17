import { Observable, ReplaySubject, SchedulerLike, Subject, Subscription } from "rxjs";
import { startWith, switchMap } from "rxjs/operators";


export class ResettableReplaySubject<T> {
  observable: Observable<T>;
  emitter = new Subject<T>();

  private reset$ = new Subject<void>();
  private destination: ReplaySubject<T>;
  private subscription: Subscription;

  constructor(private bufferSize?: number,
              private windowTime?: number,
              private scheduler?: SchedulerLike) {
    this.destination = this.getReplaySubject();
    this.subscription = this.emitter.subscribe(this.destination);
    this.observable = this.reset$.asObservable().pipe(
      startWith(() => null),
      switchMap(() => this.destination)
    );
  }

  public reset(): void {
    this.subscription.unsubscribe();
    this.destination = this.getReplaySubject();
    this.subscription = this.emitter.subscribe(this.destination);
    this.reset$.next();
  }

  private getReplaySubject(): ReplaySubject<T> {
    return new ReplaySubject(this.bufferSize, this.windowTime, this.scheduler);
  }
}