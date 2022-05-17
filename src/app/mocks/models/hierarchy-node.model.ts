export class HierarchyNode {
    id: number = -1;
    parentId: number | null = null;
    data: string = '';
    parent: HierarchyNode | null = null;
    children: HierarchyNode[] = [];
    level: number = -1;
    isExpanded: boolean = true;

    private _hidden: boolean = false;

    get hidden(): boolean {
        return (this.parent != null && !this.parent.isExpanded) || this._hidden;
    }

    private set hidden(value: boolean) {
        this._hidden = value;
        this.children.forEach(c => c.hidden = value);
    }

    get expandable(): boolean {
        return this.children.length > 0;
    }

    constructor(init?: Partial<HierarchyNode>) {
        Object.assign(this, init);
    }

    /**
     * After toggle we need to set `hidden` property of all
     * children to `!isExpanded`
     */
    public toggle(): void {
        this.isExpanded = !this.isExpanded;
        this.children.forEach(c => c.hidden = !this.isExpanded);
    }
}