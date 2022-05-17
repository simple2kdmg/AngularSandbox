import { Injectable, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subscription, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class RouterParameterService implements OnDestroy {
    private subscriptionPool: Subscription[] = [];
    private navigationQueue: Promise<boolean>;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.navigationQueue = Promise.resolve(true);
    }

    public updateRoute(url: any, queryParams = {}): Promise<boolean> {
        this.navigationQueue = this.navigationQueue.then(() => 
            this.router.navigate(url, {
                queryParams,
                queryParamsHandling: 'merge'
            })
        );
        return this.navigationQueue;
    }

    /* public clearQuery(exceptParams: string[] = []): Promise<boolean> {
        const queryParams: any = {
            someParamName: null
        };

        exceptParams.forEach( param => delete queryParams[param] );

        return this.updateRoute([], queryParams);
    } */

    ngOnDestroy(): void {
        this.subscriptionPool.forEach(subscription => subscription.unsubscribe());
    }

}
