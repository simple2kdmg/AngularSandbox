import { IBodyCellDTO } from "./body-cell-dto.interface";
import { ICategoryDTO } from "./category-dto.interface";
import { IHeadCellDTO } from "./head-cell-dto.interface";

export interface INALTableDTO {
  headCellDTOs: IHeadCellDTO[];
  categoryDTOs: ICategoryDTO[];
  bodyCellDTOs: IBodyCellDTO[];
}