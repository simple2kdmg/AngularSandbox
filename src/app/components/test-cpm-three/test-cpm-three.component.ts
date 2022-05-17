import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopUpService } from 'src/app/shared/modules/pop-up/pop-up.service';
import { IBodyCellDTO } from './DTO/body-cell-dto.interface';
import { ICategoryDTO } from './DTO/category-dto.interface';
import { IHeadCellDTO } from './DTO/head-cell-dto.interface';
import { INALTableDTO } from './DTO/nal-table-dto.interface';

@Component({
  selector: 'test-cpm-three',
  templateUrl: './test-cpm-three.component.html',
  styleUrls: ['./test-cpm-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCpmThreeComponent implements OnInit {
  private messageCounter = 0;

  constructor(private httpClient: HttpClient,
              private popUpService: PopUpService) { }

  ngOnInit(): void {
    const headCells: IHeadCellDTO[] = [];
    const categories: ICategoryDTO[] = [];
    const bodyCells: IBodyCellDTO[] = [];
    for (let i = 1; i <= 4; i++) {
      headCells.push({
        id: i,
        name: `Head cell #${i}`,
        sortOrder: i
      });
    }
    for (let i = 1; i <= 5; i++) {
      categories.push({
        id: ''+i,
        parentId: null,
        name: `Category #${i}`,
        expanded: false,
        sortOrder: i
      });
    }
    for (let i = 1; i <= categories.length; i++) {
      for (let j = 1; j <= headCells.length; j++) {
        bodyCells.push({
          rowId: ''+i,
          colId: j,
          value: (i + j) * 100
        });
      }
    }
    const table: INALTableDTO = {
      headCellDTOs: headCells, categoryDTOs: categories, bodyCellDTOs: bodyCells
    };

    console.log(JSON.stringify(table, null, 2));
  }

  public onFaultyRequest(): void {
    this.httpClient.get('faultyaddress/test').subscribe();
  }

  public onThrowError(): void {
    throw Error('Test error!');
  }

  public onObservableError(): void {
    of(true).pipe(
      map(() => {
        throw Error('Observable error');
      })
    ).subscribe();
  }

  public testPopUp(): void {
    this.popUpService.showError(new Error(), `Test message ${++this.messageCounter}`);
  }

}
