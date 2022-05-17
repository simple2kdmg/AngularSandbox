import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
         Component, OnInit, ViewChild } from '@angular/core';
import { generateHierarchy, getFlatHierarchy } from 'src/app/mocks/hierarchy-generator.functions';
import { HierarchyNode } from 'src/app/mocks/models/hierarchy-node.model';


@Component({
  selector: 'test-cmp-one',
  templateUrl: './test-cmp-one.component.html',
  styleUrls: ['./test-cmp-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCmpOneComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport | null = null;

  public hierarchy: HierarchyNode[];
  public flatHierarchy: HierarchyNode[];
  public headCellsTopOffset: string = '0px';

  constructor(private cdRef: ChangeDetectorRef) {
    this.hierarchy = generateHierarchy(1000, 7);
    //console.log(this.hierarchy);
    this.flatHierarchy = getFlatHierarchy(this.hierarchy);
    //console.log(this.flatHierarchy);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  public get getHeadOffset(): string {
    //console.count('calc offset');
    const offsetToRenderedContentStart = this.viewPort?.getOffsetToRenderedContentStart();
    console.log(`viewPort offset: ${this.viewPort?.getOffsetToRenderedContentStart()}`);
    console.log(`viewPort size: ${this.viewPort?.getViewportSize()}`);
    return offsetToRenderedContentStart ? `-${offsetToRenderedContentStart}px` : '0px';
  }

  public onNodeClick(node: HierarchyNode): void {
    node.toggle();
    this.flatHierarchy = getFlatHierarchy(this.hierarchy);
    /* console.log(this.hierarchy);
    console.log(this.flatHierarchy); */
  }

  public trackByState(index: number, node: HierarchyNode): string {
    return `${index}x${node.id}x${node.hidden}`;
  }

}
