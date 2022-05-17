import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { RequestsService } from './exercise-one-requests.service';
import { ExerciseOneService } from './exercise-one.service';
import { ParametersService } from './parameters.service';
import { IProduct } from './product.interface';


@Component({
  selector: 'parent-component',
  template: `
    <button (click)="setParameterValue()>Set parameter</button>
    <child-component [parameter]="parentParameter"></child-component>
  `
})
export class ParentComponent {
  public parentParameter: number | undefined;

  constructor() {}

  public setParameterValue(): void {
    this.parentParameter = 100;
  }
}


@Component({
  selector: 'child-component',
  template: `<div>{{ parameter }}</div>`
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() parameter: number | undefined;

  constructor() {}

  ngOnChanges(): void {
    console.log(this.parameter);
  }

  ngOnInit(): void {
    console.log(this.parameter);
  }
}


/**
 * Рефакторинг #1
 * Компонент получает на вход Id продукта. Нужно, чтобы
 * при его изменении через сервис запрашивался соответсвующий продукт.
 * Интерфейс, описывающий продукт:
 *  interface IProduct {
      id: number;
      name: string;
    }
   Метод, запрашивающий продукт: getProductById(id: number): Observable<IProduct>
 */
@Component({
  selector: 'refactoring-one',
  template: `<div>Product name: {{ product.name }}</div>`
})
export class RefactoringOneComponent {
  @Input() productId: number;

  public product: IProduct;

  constructor(requestsService: RequestsService) {
    requestsService.getProductById(this.productId).subscribe(product => {
      this.product = product;
    });
  }

}


/**
 * Рефакторинг #2
 * Есть сервис, в котором живет поток текущего Id продукта: 
 * actualProductId$: Observable<number>
 * При изменениях в этом потоке нужно обновить данные по продукту.
 * Интерфейс, описывающий продукт:
 *  interface IProduct {
      id: number;
      name: string;
    }
   Метод, запрашивающий продукт: getProductById(id: number): Observable<IProduct>
 */
@Component({
  selector: 'refactoring-two',
  template: `<div *ngIf="product$ | async as product">Product name: {{ product.name }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefactoringTwoComponent implements OnInit {
  public product$ = new Subject<IProduct>();

  constructor(private dataService: ExerciseOneService,
              private requestsService: RequestsService) {}

  ngOnInit(): void {
    this.dataService.actualProductId$.subscribe(productId => {
      this.requestsService.getProductById(productId).subscribe(
        product => this.product$.next(product)
      );
    });
  }

}


/**
 * Рефакторинг #3
 * Есть сервис, в котором живет поток некоего параметра продукта: 
 * param$: Observable<number>
 * В компоненте, при клике на кнопку нужно обновить данные по продукту на основании
 * productId и значения параметра из потока param$.
   Метод, запрашивающий продукт: getProduct(id: number, param: number): Observable<IProduct>
 */
   @Component({
    selector: 'refactoring-three',
    template: `
      <button (click)="onProductUpdate()">Update Product</button>
      <div *ngIf="product$ | async as product">Product name: {{ product.name }}</div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class RefactoringThreeComponent {
    @Input() productId: number | undefined;
    public product$ = new Subject<IProduct | null>();
  
    constructor(private dataService: ExerciseOneService,
                private requestsService: RequestsService) {}

    public onProductUpdate(): void {
      // this.requestsService.getProduct(productId, param)
    }
  
  }


/**
 * Рефакторинг #4
 * Есть сервис, в котором заданы потоки параметров:
 * param1$: Observable<number>
 * param2$: Observable<number>
 * param3$: Observable<number>
 * Требуется обновлять информацию о продукте при изменении
 * любого из трех параметров через метод
 * requestService.getProductByParams(param1: number, param2: number, param3: number).
 * Если все 3 потока могут очень часто эмитить новые значения,
 * есть ли способ избежать слишком частых запросов?
 */
 @Component({
  selector: 'refactoring-four',
  template: '<div *ngIf="product$ | async as product">Product name: {{ product.name }}</div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefactoringFourComponent implements OnInit {
  public product$ = new Subject<IProduct>();

  constructor(private parametersService: ParametersService,
              private requestService: RequestsService) {}

  ngOnInit(): void {
    this.parametersService.param1$
    this.parametersService.param2$
    this.parametersService.param3$
  }
}

// #4

@Component({
  selector: 'wrapper',
  template: `<div *ngIf="hidden" class="content-wrapper">
                <ng-content></ng-content>
             </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseOneComponent {
  @Input() hidden: boolean | undefined | null;

  constructor(){}
}


@Component({
  selector: 'test',
  template: `<div>Test component  content</div>`
})
export class TestComponent implements OnInit, OnDestroy {
  constructor(){}

  ngOnInit(): void {
    console.log('Test component init.');
  }

  ngOnDestroy(): void {
    console.log('Test component destroy.');
  }
}


@Component({
  selector: 'ng-content-testing',
  template: `<button (click)="onToggleContent()">Toggle content</button>
             <wrapper [hidden]="!isContentVisible">
                <test></test>
             </wrapper>`
})
export class NgContentTestingComponent implements OnInit {
  public isContentVisible: boolean = true;

  constructor(){}

  ngOnInit(): void {
    console.count('Test component init.');
  }

  public onToggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }
}
