import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  // @HostBinding('style.background-color') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor() {
    // código Extra se precisar de alguma manipulação
    return this.backgroundColor;
  }

  private backgroundColor: string;
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.backgroundColor = this.defaultColor;
  }
}
