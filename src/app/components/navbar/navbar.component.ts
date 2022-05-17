import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { INavItem } from 'src/app/models/nav-item.interface';
import { PageInfoService } from 'src/app/services/page-info.service';
import { RouterParameterService } from 'src/app/services/router-parameter.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public readonly navItems: INavItem[] = [
    { pageCode: '', pageTitle: 'Cmp 1', relativeUrl: 'cmp-one', sortOrder: 1 },
    { pageCode: '', pageTitle: 'Cmp 2', relativeUrl: 'cmp-two', sortOrder: 2 },
    { pageCode: '', pageTitle: 'Cmp 3', relativeUrl: 'cmp-three', sortOrder: 3 },
    { pageCode: '', pageTitle: 'Cmp 4', relativeUrl: 'cmp-four', sortOrder: 4 },
    { pageCode: '', pageTitle: 'Cmp 5', relativeUrl: 'cmp-five', sortOrder: 5 },
    { pageCode: '', pageTitle: 'Cmp 6', relativeUrl: 'cmp-six', sortOrder: 6 }
  ];
  public currentUrl: string | undefined;

  private destroy$ = new Subject<void>();

  constructor(private routerParameterService: RouterParameterService,
              private pageInfoService: PageInfoService) { }

  ngOnInit(): void {
    this.pageInfoService.urlWithoutQuery$.pipe(takeUntil(this.destroy$))
      .subscribe(url => this.currentUrl = url);
  }

  public onLinkClick(url: string): void {
    if (this.currentUrl === url) return;
    this.routerParameterService.updateRoute([url]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
