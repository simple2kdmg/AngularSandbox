import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IProduct } from './product.interface';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor() { }

  public getProduct(id: number, param: number): Observable<IProduct> {
    return of({ id: 1, name: 'Product-1' } as IProduct).pipe(
      delay(300)
    );
  }

  public getProductById(id: number): Observable<IProduct> {
    return of({ id: 1, name: 'Product-1' } as IProduct).pipe(
      delay(300)
    );
  }

  public getProductByParams(param1: number, param2: number, param3: number): Observable<IProduct> {
    return of({ id: 1, name: 'Product-1' } as IProduct).pipe(
      delay(300)
    );
  }
}
