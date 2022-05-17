import { HierarchyNode } from "./models/hierarchy-node.model";

export function generateHierarchy(rootElemsCount: number = 10,
                                  maxChildrenCount: number = 5): HierarchyNode[] {
  let localId = 1;
  let result: HierarchyNode[] = generateNodes(rootElemsCount, localId, 1);

  localId += rootElemsCount;

  for (let i = 0; i < rootElemsCount; i++) {
    const childrenCount = randomInteger(0, maxChildrenCount);
    result[i].children = generateNodes(childrenCount, localId, 2, result[i]);
    localId += childrenCount;

    if (childrenCount > 0) {
      result[i].children.forEach(node => {
        const grandChildrenCount = randomInteger(0, maxChildrenCount);
        node.children = generateNodes(grandChildrenCount, localId, 3, node);
        localId += grandChildrenCount;
      })
    }
  }

  return result;
}

function generateNodes(count: number, startId: number, level: number, parent: HierarchyNode | null = null): HierarchyNode[] {
  let localId = startId;
  const data = (startId > 11 && startId < 50) ? new Array(randomInteger(6, 40)).fill('X').join('') : 'XXXX';
  return new Array(count)
    .fill(-1)
    .map(_ => new HierarchyNode({ id: localId++, data, parent, parentId: parent?.id ?? null, level }));
}

function randomInteger(min: number, max: number): number {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export function getFlatHierarchy(hierarchy: HierarchyNode[]): HierarchyNode[] {
  let result: HierarchyNode[];
  const start = Date.now();
  result = flatHierarchyRecursive(hierarchy);
  const end = Date.now();
  console.log(end - start);
  return result;
}

function flatHierarchyRecursive(root: HierarchyNode[]): HierarchyNode[] {
  let res: HierarchyNode[] = [];
  for (let node of root) {
    if (!node.hidden) res.push(node);
    res = res.concat(flatHierarchyRecursive(node.children));
  }
  return res;
}