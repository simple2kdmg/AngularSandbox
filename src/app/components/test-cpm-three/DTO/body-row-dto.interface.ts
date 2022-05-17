import { IBodyCellDTO } from "./body-cell-dto.interface";
import { ICategoryDTO } from "./category-dto.interface";

export interface IBodyRowDTO {
  category: ICategoryDTO;
  cells: IBodyCellDTO[];
}