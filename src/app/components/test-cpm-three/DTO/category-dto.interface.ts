export interface ICategoryDTO {
  id: string;
  parentId: string | null;
  name: string;
  expanded: boolean;
  sortOrder: number;
}