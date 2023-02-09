import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private eleRef:ElementRef ) {
    eleRef.nativeElement.style.background = 'red'; 
   }

}
