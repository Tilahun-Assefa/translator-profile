import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Translator } from 'src/app/_interfaces/translator';

@Directive({
  selector: '[appAppend]',
  standalone: true
})
export class AppendDirective implements OnChanges {
  @Input('appAppend')
  translatorParam!: Translator;
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['translatorParam'].currentValue){
      const accNum = changes['translatorParam'].currentValue.translationorders.length;
      const span = this.renderer.createElement('span');
      const text = this.renderer.createText(` (${accNum}) orders`);
      this.renderer.appendChild(span, text);
      this.renderer.appendChild(this.element.nativeElement, span);
    }
  }
}
