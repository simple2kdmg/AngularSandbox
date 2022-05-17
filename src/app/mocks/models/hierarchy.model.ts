import { HierarchyNode } from "./hierarchy-node.model";

export class Hierarchy {
    nodes: HierarchyNode[] = [];

    public getFlatHierarchy(hierarchy: HierarchyNode[]): HierarchyNode[] {
      return this.flatHierarchyRecursive(hierarchy);
    }
      
    private flatHierarchyRecursive(root: HierarchyNode[]): HierarchyNode[] {
      let res: HierarchyNode[] = [];
      for (let node of root) {
        if (!node.hidden) res.push(node);
        res = res.concat(this.flatHierarchyRecursive(node.children));
      }
      return res;
    }
}