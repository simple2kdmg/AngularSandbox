import { ComponentFactoryResolver, Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';

@Directive({
  selector: '[spinner]'
})
export class SpinnerDirective implements OnInit {
  @Input('spinner') spinnerSizePx: number = 14;

  constructor(private elRef: ElementRef,
              private vcRef: ViewContainerRef,
              private renderer: Renderer2,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.elRef.nativeElement, 'position', 'relative');
    const factory = this.componentFactoryResolver.resolveComponentFactory<LoadingSpinnerComponent>(LoadingSpinnerComponent);
    const componentRef = this.vcRef.createComponent(factory);
    componentRef.instance.size = this.spinnerSizePx;
    this.renderer.appendChild(
      this.vcRef.element.nativeElement,
      componentRef.location.nativeElement
    );
  }

}
