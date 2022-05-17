import { Injectable } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  private readonly urlRegexp = new RegExp(/\/([\w-\/]*)(\?|$)/); // get everything between '/' and '?'
  public urlWithoutQuery$ = new ReplaySubject<string>(1);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter( (e: Event) => e instanceof NavigationEnd ),
      map((e: Event) => {
        const navEndEv = e as NavigationEnd;
        return navEndEv.urlAfterRedirects || navEndEv.url;
      }),
      filter( url => this.urlRegexp.test(url) ),
      map( url => url.match(this.urlRegexp)![1] ),
      distinctUntilChanged()
    ).subscribe(urlWithoutQuery => this.urlWithoutQuery$.next(urlWithoutQuery));
  }

}
