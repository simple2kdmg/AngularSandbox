import { Component, ChangeDetectionStrategy,
         ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootComponent implements OnInit, AfterViewInit {

  public get initialize(): boolean {
    console.count('root component redrawn');
    return true;
  }

  constructor(private cdRef: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }
}
